import { NextResponse } from "next/server";
import { processScheduledPosts } from "@/lib/scheduler";

export async function POST() {
  try {
    const count = await processScheduledPosts();
    return NextResponse.json({ message: `Processed ${count} posts` });
  } catch (error) {
    return NextResponse.json({ error: "Scheduler failed" }, { status: 500 });
  }
}
