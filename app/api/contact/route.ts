import { contactSchema } from "../../../lib/contact-schema";
import { isRateLimited } from "../../../lib/rate-limit";

export const runtime = "nodejs";

export async function POST(request: Request): Promise<Response> {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return Response.json(
      { ok: false, error: "Too many requests. Please try again in a minute." },
      { status: 429 }
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!errors[key]) errors[key] = issue.message;
    }
    return Response.json({ ok: false, errors }, { status: 400 });
  }

  const { name, email, subject, message } = parsed.data;

  // Web3Forms integration key
  const accessKey =
    process.env.WEB3FORMS_ACCESS_KEY ||
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    console.error("[contact] Missing WEB3FORMS_ACCESS_KEY environment variable");
    return Response.json(
      { ok: false, error: "Contact service is not configured with an access key." },
      { status: 500 }
    );
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        subject: `[MM Portfolio] ${subject}`,
        message,
        from_name: name,
        replyto: email,
      }),
    });

    const data = await response.json();

    if (data.success) {
      return Response.json({ ok: true }, { status: 200 });
    } else {
      console.error("[contact] Web3Forms error:", data.message);
      return Response.json(
        { ok: false, error: data.message || "Failed to deliver message." },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error("[contact] Unexpected fetch error:", err);
    return Response.json(
      { ok: false, error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
