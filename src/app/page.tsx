import { BlogCard } from '@/components/blog-card';
import { blogData } from '@/lib/blog-data';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import { CategoriesSection } from '@/components/categories-section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const POSTS_TO_SHOW = 12;

export default function Home() {
  const postsToShow = blogData.slice(0, POSTS_TO_SHOW);
  const mostViewedPosts = blogData.slice(4, 8);


  return (
    <div className="space-y-12">
      <CategoriesSection />

      <section className="w-full">
        <h2 className="text-3xl font-bold text-center mb-8">
            Latest Articles
        </h2>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {postsToShow.map((post) => (
              <CarouselItem key={post.slug} className="md:basis-1/2 lg:basis-1/3">
                 <div className="p-1 h-full">
                    <BlogCard 
                        post={post}
                        className="h-full"
                    />
                 </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

       <section className="w-full">
        <h2 className="text-3xl font-bold text-center mb-8">
            Most Viewed
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mostViewedPosts.map((post) => (
                <BlogCard 
                    key={post.slug}
                    post={post}
                    className="h-full"
                />
            ))}
        </div>
      </section>

      <Separator className="my-12" />

      <section className="py-8 md:py-12">
        <div className="max-w-2xl mx-auto">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  );
}
