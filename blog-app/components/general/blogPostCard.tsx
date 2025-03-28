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
    }
};

export function BlogPostCard({ data }: BlogPostCardProps) {
    return (
        <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg">
            <Link href={`/blog/${data.id}`} className="w-full h-full block">
            </Link>
        </div>
    );
}