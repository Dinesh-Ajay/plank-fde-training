import { NextResponse } from "next/server";
import { appConfig } from "@/lib/config";

export function GET() {
  return NextResponse.json({ status: "ok", commit: appConfig.commit });
}
