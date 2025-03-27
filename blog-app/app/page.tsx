// import Link from "next/link";

import { prisma } from "./utils/db";

async function getPosts() {
  const data = await prisma.blogPost.findMany({
    select: {
      title: true,
      content: true,
      imageUrl: true,
      authorImage: true,
      authorName: true,
      createdAt: true,
      id: true,
    },
  });

  return data;
};


export default async function Home() {
  const data = await getPosts();
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Latest Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          data.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
              
              <h2 className="text-xl font-semibold mt-4">{post.title}</h2>
              <p className="text-gray-500 mt-2">{post.content}</p>
              <div className="flex items-center mt-4">
                
                <p className="text-gray-700 ml-2">{post.authorName}</p>
              </div>
              <p>{post.createdAt.toLocaleDateString()}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}
