
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { BlogPost } from '@/lib/blog-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollFadeIn } from './scroll-fade-in';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type BlogCardProps = {
  post: BlogPost;
  className?: string;
  isFeatured?: boolean;
};

export function BlogCard({ post, className, isFeatured = false }: BlogCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === post.featuredImageId);
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    setFormattedDate(new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, [post.date]);


  if (isFeatured) {
    return (
      <Card className={cn("overflow-hidden h-full flex flex-col group transition-all duration-300 relative text-white", className)}>
        <Link
          href={`/blog/${post.slug}`}
          className="block w-full h-full"
          aria-label={`Read more about ${post.title}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {image && (
            <Image
              src={image.imageUrl}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              data-ai-hint={image.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 w-full">
             <Badge variant="secondary" className="mb-2 uppercase tracking-wider text-xs font-semibold">
                {post.category}
              </Badge>
              <h3 className="font-headline text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-3">
                {post.title}
              </h3>
              <div className="text-xs text-white/80 mt-2">
                <span>
                  By {post.author} on {formattedDate}
                </span>
              </div>
          </div>
        </Link>
      </Card>
    );
  }


  return (
    <Card className={cn(`overflow-hidden h-full flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1`, className)}>
      <Link
        href={`/blog/${post.slug}`}
        className="block"
        aria-label={`Read more about ${post.title}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="overflow-hidden relative">
          {image && (
            <ScrollFadeIn>
              <Image
                src={image.imageUrl}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-40 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                data-ai-hint={image.imageHint}
              />
            </ScrollFadeIn>
          )}
           <div className="absolute top-2 left-2">
             <Badge variant="secondary" className="uppercase tracking-wider text-xs font-semibold">
              {post.category}
            </Badge>
           </div>
        </div>
      </Link>
      <CardContent className="p-4 flex-grow flex flex-col">
        <div className="flex-grow">
          <Link
            href={`/blog/${post.slug}`}
            className="block"
            aria-label={`Read more about ${post.title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="font-headline text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>
          </Link>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {post.excerpt}
          </p>
        </div>
        <div className="text-xs text-muted-foreground mt-3 pt-3 border-t">
          <span>
            By {post.author}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
