'use client';

import * as React from 'react';
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

export function CategoriesSection() {
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

  return (
    <section className="w-full py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Explore by Category
      </h2>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent>
          {categories.map(([category, posts]) => (
            <CarouselItem key={category} className="md:basis-1/1 lg:basis-1/1">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <h3 className="text-2xl font-semibold mb-4">{category}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
                      {posts.slice(0, 4).map((post) => (
                        <BlogCard key={post.slug} post={post} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
