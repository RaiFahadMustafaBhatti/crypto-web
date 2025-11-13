'use client';

import { useSearchParams } from 'next/navigation';
import { blogData, type BlogPost } from '@/lib/blog-data';
import { BlogCard } from '@/components/blog-card';
import { useMemo } from 'react';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  const filteredPosts = useMemo(() => {
    if (!query) {
      return [];
    }
    
    const lowercasedQuery = query.toLowerCase();

    return blogData.filter((post: BlogPost) => {
      const titleMatch = post.title.toLowerCase().includes(lowercasedQuery);
      const excerptMatch = post.excerpt.toLowerCase().includes(lowercasedQuery);
      const tagsMatch = post.tags.some(tag => tag.toLowerCase().includes(lowercasedQuery));
      const categoryMatch = post.category.toLowerCase().includes(lowercasedQuery);
      const contentMatch = post.content.some(contentItem => 
        contentItem.type === 'paragraph' && contentItem.content.toLowerCase().includes(lowercasedQuery)
      );

      return titleMatch || excerptMatch || tagsMatch || categoryMatch || contentMatch;
    });
  }, [query]);

  return (
    <div className="space-y-12">
      <section className="text-center py-8 md:py-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
          Search Results
        </h1>
        {query && (
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showing results for: <span className="text-primary font-semibold">"{query}"</span>
          </p>
        )}
      </section>

      <section>
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-muted-foreground">No posts found.</h2>
            <p className="text-muted-foreground mt-2">Try searching for something else.</p>
          </div>
        )}
      </section>
    </div>
  );
}
