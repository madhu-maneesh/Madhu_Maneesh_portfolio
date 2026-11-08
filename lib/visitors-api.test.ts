import { describe, expect, it } from "vitest";
import { GET } from "../app/api/visitors/route";

describe("Visitor API Route", () => {
  it("increments visitor count for new unique IP from baseline 1313", async () => {
    const testId = Date.now() % 250;
    const testIp1 = `203.0.113.${testId}`;
    const testIp2 = `198.51.100.${(testId + 1) % 250}`;

    const req1 = new Request("http://localhost:3000/api/visitors", {
      headers: { "x-forwarded-for": testIp1 },
    });
    const res1 = await GET(req1);
    const data1 = await res1.json();

    expect(data1.success).toBe(true);
    expect(typeof data1.count).toBe("number");
    expect(data1.count).toBeGreaterThanOrEqual(1313);

    const initialCount = data1.count;

    // Same IP should not increment count
    const reqDuplicate = new Request("http://localhost:3000/api/visitors", {
      headers: { "x-forwarded-for": testIp1 },
    });
    const resDuplicate = await GET(reqDuplicate);
    const dataDuplicate = await resDuplicate.json();
    expect(dataDuplicate.count).toBe(initialCount);

    // New unique IP should increment count
    const req2 = new Request("http://localhost:3000/api/visitors", {
      headers: { "x-forwarded-for": testIp2 },
    });
    const res2 = await GET(req2);
    const data2 = await res2.json();
    expect(data2.count).toBe(initialCount + 1);
  });
});
