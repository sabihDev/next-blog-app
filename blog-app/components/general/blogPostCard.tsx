import Image from "next/image";
import Link from "next/link";

interface BlogPostCardProps {
  data: {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    authorId: string;
    authorName: string;
    authorImage: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

export function BlogPostCard({ data }: BlogPostCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg">
      <Link href={`/blog/${data.id}`} className="w-full h-full block">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            src={data.imageUrl}
            alt={data.title}
            fill
          />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {data.title}
          </h3>

          <p className="mb-4 text-sm text-gray-600 line-clamp-2">
            {data.content}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative rounded-full size-8 overflow-hidden">
                <Image src={data.authorImage} alt={data.authorName} fill />
              </div>

              <p className="text-sm font-medium text-gray-700">
                {data.authorName}
              </p>
            </div>
            <time className="text-xs text-gray-500">
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "long",
                day: "2-digit",
              }).format(data.createdAt)}
            </time>
          </div>
        </div>
      </Link>
    </div>
  );
}
