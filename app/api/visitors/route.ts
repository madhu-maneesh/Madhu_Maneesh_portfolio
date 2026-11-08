import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";

const DATA_FILE = path.join(process.cwd(), ".visitors.json");
const BASELINE_COUNT = 1313;

interface VisitorData {
  count: number;
  ips: string[];
  lastUpdated: string;
}

function loadData(): VisitorData {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, "utf-8");
      const parsed = JSON.parse(raw);
      if (typeof parsed.count === "number" && Array.isArray(parsed.ips)) {
        if (parsed.count < BASELINE_COUNT) {
          parsed.count = BASELINE_COUNT;
        }
        return parsed;
      }
    }
  } catch {}
  return { count: BASELINE_COUNT, ips: [], lastUpdated: new Date().toISOString() };
}

function saveData(data: VisitorData) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch {}
}

export async function GET(request: Request) {
  const data = loadData();

  // Extract client identifier
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const ip = (forwarded ? forwarded.split(",")[0].trim() : realIp) || "127.0.0.1";

  // Check if this visitor is already registered
  const hasVisited = data.ips.includes(ip);

  if (!hasVisited) {
    data.count += 1;
    data.ips.push(ip);
    if (data.ips.length > 10000) {
      data.ips = data.ips.slice(-10000);
    }
    data.lastUpdated = new Date().toISOString();
    saveData(data);
  }

  return NextResponse.json({
    count: data.count,
    isNew: !hasVisited,
    success: true,
  });
}

export async function POST(request: Request) {
  return GET(request);
}
