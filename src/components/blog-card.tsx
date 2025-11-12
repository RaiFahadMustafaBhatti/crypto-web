import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { BlogPost } from '@/lib/blog-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollFadeIn } from './scroll-fade-in';

type BlogCardProps = {
  post: BlogPost;
  className?: string;
};

export function BlogCard({ post, className }: BlogCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === post.featuredImageId);

  return (
    <Card className={`overflow-hidden h-full flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}>
      <Link
        href={`/blog/${post.slug}`}
        className="block"
        aria-label={`Read more about ${post.title}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="overflow-hidden">
          {image && (
            <ScrollFadeIn>
              <Image
                src={image.imageUrl}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                data-ai-hint={image.imageHint}
              />
            </ScrollFadeIn>
          )}
        </div>
      </Link>
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="flex-grow">
          <Badge variant="secondary" className="mb-2 uppercase tracking-wider text-xs font-semibold">
            {post.category}
          </Badge>
          <Link
            href={`/blog/${post.slug}`}
            className="block"
            aria-label={`Read more about ${post.title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="font-headline text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>
          </Link>
          <p className="text-muted-foreground text-sm line-clamp-3">
            {post.excerpt}
          </p>
        </div>
        <div className="text-xs text-muted-foreground mt-4 pt-4 border-t">
          <span>
            By {post.author} on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
