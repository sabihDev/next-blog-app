import { prisma } from "@/app/utils/db";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getDataBlog(id: string) {
  const data = await prisma.blogPost.findUnique({
    where: {
      id: id,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

type Params = Promise<{ id: string }>;

export default async function BlogViewPage({ params }: { params: Params }) {
  const { id } = await params;

  const data = await getDataBlog(id);
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <Link
        className={buttonVariants({ variant: "secondary" })}
        href="/"
      >
        Back to Posts
      </Link>
      <h1 className="text-3xl font-bold tracking-tight mb-4">{data.title}</h1>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="relative size-10 rounded-full overflow-hidden">
            <Image src={data.authorImage} alt={data.authorName} fill className="object-cover" />
          </div>
          <p className="font-medium">{data.authorName}</p>
        </div>
        <p className="text-sm text-muted-foreground">
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          }).format(data.createdAt)}
        </p>
      </div>

      <div className="relative h-[400px] my-8 w-full rounded-lg overflow-hidden">
        <Image src={data.imageUrl} alt={data.title} fill className="object-cover" priority />
      </div>

      <Card>
        <CardContent>
          <p className="text-muted-foreground">{data.content}</p>
        </CardContent>
      </Card>
    </div>
  );
}
