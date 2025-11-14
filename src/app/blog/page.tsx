import { BlogCard } from '@/components/blog-card';
import { PaginationControls } from '@/components/pagination-controls';
import { blogData } from '@/lib/blog-data';
import React from 'react';
import type { Metadata } from 'next';

const POSTS_PER_PAGE = 9;

export const metadata: Metadata = {
    title: 'Blog | CryptoVerse Explorer',
    description: 'Explore all the latest articles, news, and guides on cryptocurrency and blockchain from CryptoVerse Explorer.',
};

export default function BlogPage({
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
          Our Blog
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          All our articles, guides, and news in one place. Stay up-to-date with the fast-paced world of crypto.
        </p>
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
          baseUrl="/blog"
        />
      )}
    </div>
  );
}
