import { buttonVariants } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { prisma } from "../utils/db";
import { BlogPostCard } from "@/components/general/blogPostCard";

async function getPostsOfUser(userId: string) {
  const postsToBeGet = await prisma.blogPost.findMany({
    where: {
      authorId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return postsToBeGet;
}

export default async function Dashboard() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const posts = await getPostsOfUser(user?.id);

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium">Your Posts</h2>
        <Link className={buttonVariants()} href="/dashboard/create">
          Create
        </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {posts.map((post) => (
                  <BlogPostCard data={post} key={post.id} />
              ))}
          </div>
    </div>
  );
}
