
'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { blogData, type BlogPost } from '@/lib/blog-data';
import { BlogCard } from './blog-card';
import { Card, CardContent } from './ui/card';
import { cn } from '@/lib/utils';
import { type CarouselApi } from '@/components/ui/carousel';

const CategoryGrid = ({ posts }: { posts: BlogPost[] }) => {
  const numPosts = posts.length;

  if (numPosts === 1) {
    return (
      <div className="w-full h-full min-h-[400px]">
        <BlogCard post={posts[0]} isFeatured={true} className="h-full" />
      </div>
    );
  }

  if (numPosts === 2) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-full min-h-[400px]">
        <BlogCard post={posts[0]} className="h-full" />
        <BlogCard post={posts[1]} className="h-full" />
      </div>
    );
  }

  if (numPosts === 3) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full min-h-[400px] md:min-h-[500px]">
            <div className="md:col-span-1">
                <BlogCard post={posts[0]} isFeatured={true} className="h-full" />
            </div>
             <div className="hidden md:flex md:col-span-1 md:flex-col gap-4">
                <BlogCard post={posts[1]} className="flex-1" />
                <BlogCard post={posts[2]} className="flex-1" />
            </div>
             {/* Mobile view for 3 posts */}
            <div className="md:hidden grid grid-cols-2 gap-4">
                 <BlogCard post={posts[1]} className="h-full" />
                 <BlogCard post={posts[2]} className="h-full" />
            </div>
        </div>
    );
  }

  // Default to 4 posts in a 2x2 grid
  return (
    <div className="grid grid-cols-2 gap-4 w-full h-full min-h-[400px] md:aspect-w-2 md:aspect-h-1">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} className="h-full" />
      ))}
    </div>
  );
};


export function CategoriesSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  const categories = React.useMemo(() => {
    const categoryMap = new Map<string, BlogPost[]>();
    blogData.forEach((post) => {
      if (!categoryMap.has(post.category)) {
        categoryMap.set(post.category, []);
      }
      categoryMap.get(post.category)!.push(post);
    });
    return Array.from(categoryMap.entries());
  }, []);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="w-full">
      <h2 className="text-3xl font-bold text-center mb-4">
        Explore by Category
      </h2>
      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full"
      >
        <CarouselContent>
          {categories.map(([category, posts]) => (
            <CarouselItem key={category}>
              <div className="p-1 h-full">
                <Card className="h-full">
                  <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                    <h3 className="text-2xl font-semibold mb-4">{category}</h3>
                    <CategoryGrid posts={posts.slice(0, 4)} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
      <div className="md:hidden flex justify-center items-center gap-2 mt-4">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              'h-2 w-2 rounded-full transition-all',
              current === index ? 'w-4 bg-primary' : 'bg-muted-foreground/50'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
