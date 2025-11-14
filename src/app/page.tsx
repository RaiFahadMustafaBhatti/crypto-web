import { blogData } from '@/lib/blog-data';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import { CategoriesSection } from '@/components/categories-section';
import { FeaturedPostsGrid } from '@/components/featured-posts-grid';

const POSTS_TO_SHOW = 13;

export default function Home() {
  const postsToShow = blogData.slice(0, POSTS_TO_SHOW);
  
  return (
    <div className="space-y-16">
      <div className="-mt-8">
        <CategoriesSection />
      </div>

      <section className="w-full">
        <FeaturedPostsGrid posts={postsToShow} />
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
