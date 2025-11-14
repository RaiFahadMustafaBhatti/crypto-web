import { type BlogPost } from '@/lib/blog-data';
import { BlogCard } from './blog-card';

export function FeaturedPostsGrid({ posts }: { posts: BlogPost[] }) {
  if (!posts || posts.length === 0) {
    return null;
  }

  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Featured Post */}
      <div className="md:col-span-4 md:row-span-2 min-h-[400px] md:min-h-[500px]">
        <BlogCard post={featuredPost} isFeatured={true} className="h-full" />
      </div>

      {/* Remaining Posts */}
      {remainingPosts.map((post) => (
        <div key={post.slug} className="md:col-span-1">
           <BlogCard post={post} className="h-full" />
        </div>
      ))}
    </div>
  );
}
