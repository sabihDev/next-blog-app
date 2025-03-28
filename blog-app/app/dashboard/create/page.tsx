import { createPost } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CreatePosts() {
  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader className="space-y-2">
          <CardTitle className="text-3xl font-bold text-center">
            Create Post
          </CardTitle>
          <CardDescription className="text-center text-gray-500">
            Share your thoughts and ideas with the world
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-6" action={createPost}>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Post Title</Label>
              <Input
                placeholder="Enter your post title..."
                className="w-full p-3"
                name="title"
                type="text"
                required
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Content</Label>
              <Textarea
                placeholder="Write your post content here..."
                className="min-h-[150px] w-full p-3"
                name="content"
                required
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Cover Image</Label>
              <Input
                type="url"
                className="w-full"
                name="url"
                placeholder="Image url"
              />
            </div>

            <Button className="w-full py-5 text-lg font-semibold">
              Publish Post
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
