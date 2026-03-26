import prisma from "./prisma";

export async function processScheduledPosts() {
  console.log("Checking for scheduled posts...");
  
  const now = new Date();
  const postsToPost = await prisma.post.findMany({
    where: {
      status: "scheduled",
      scheduledAt: { lte: now },
    },
  });

  for (const post of postsToPost) {
    console.log(`Posting to ${post.platforms}: ${post.content}`);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    await prisma.post.update({
      where: { id: post.id },
      data: { status: "posted" },
    });
  }

  return postsToPost.length;
}
