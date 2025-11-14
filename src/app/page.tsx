import { BlogCard } from '@/components/blog-card';
import { blogData } from '@/lib/blog-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
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

  return (
    <div className="space-y-12">
      <section className="text-center py-8 md:py-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
          Explore the CryptoVerse
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
          Your ultimate guide to understanding the world of digital currencies, blockchain, and decentralized finance. Get started on your journey today.
        </p>
        <Button asChild size="lg">
          <Link href="/blog" target="_blank" rel="noopener noreferrer">
            Explore Blog <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </section>

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

      <Separator className="my-12" />

      <section className="py-8 md:py-12">
        <div className="max-w-2xl mx-auto">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  );
}
