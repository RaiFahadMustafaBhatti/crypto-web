import { BlogCard } from '@/components/blog-card';
import { PaginationControls } from '@/components/pagination-controls';
import { blogData } from '@/lib/blog-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const POSTS_PER_PAGE = 6;

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams['page'] ?? '1';
  const currentPage = Number(page);
  
  const totalPosts = blogData.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const postsToShow = blogData.slice(startIndex, endIndex);

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
          <Link href="/?page=1" target="_blank" rel="noopener noreferrer">
            Explore Blog <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postsToShow.map((post) => (
            <BlogCard 
              key={post.slug} 
              post={post}
            />
          ))}
        </div>
      </section>
      
      {totalPages > 1 && (
        <PaginationControls 
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}

      <Separator className="my-12" />

      <section className="py-8 md:py-12">
          <div className="max-w-2xl mx-auto">
              <NewsletterSignup />
          </div>
      </section>
    </div>
  );
}
