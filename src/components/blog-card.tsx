
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { BlogPost } from '@/lib/blog-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
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
              className="object-cover"
              data-ai-hint={image.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
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
      <div className="overflow-hidden relative h-64 text-white">
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
                className="object-cover"
                data-ai-hint={image.imageHint}
              />
          )}
           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
           <div className="absolute top-2 left-2">
             <Badge variant="secondary" className="uppercase tracking-wider text-xs font-semibold">
              {post.category}
            </Badge>
           </div>
           <div className="absolute bottom-0 left-0 p-4 w-full">
              <h3 className="font-headline text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-3">
                {post.title}
              </h3>
              <div className="text-xs text-white/80 mt-2">
                <span>
                  By {post.author}
                </span>
              </div>
          </div>
        </Link>
      </div>
       <CardContent className="p-4 flex-grow flex flex-col">
          <p className="text-sm text-muted-foreground flex-grow line-clamp-3">{post.excerpt}</p>
         <div className="text-sm text-muted-foreground mt-4 pt-3 border-t font-semibold">
          <Link href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer" className='hover:text-primary'>Read More &rarr;</Link>
        </div>
      </CardContent>
    </Card>
  );
}
