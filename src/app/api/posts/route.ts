import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { scheduledAt: "desc" },
    });
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { content, platforms, scheduledAt, mediaUrl } = body;

    const post = await prisma.post.create({
      data: {
        content,
        platforms: platforms.join(","),
        scheduledAt: new Date(scheduledAt),
        mediaUrl,
        status: "scheduled",
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}
