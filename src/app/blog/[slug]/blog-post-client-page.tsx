'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { type BlogPost, type BlogContent } from '@/lib/blog-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { BlogCard } from '@/components/blog-card';
import React from 'react';
import Link from 'next/link';
import { ScrollFadeIn } from '@/components/scroll-fade-in';

function ContentRenderer({ contentItem }: { contentItem: BlogContent }) {
  const { type, content } = contentItem;

  switch (type) {
    case 'heading':
      return <h2 className="font-headline text-2xl md:text-3xl font-bold mt-10 mb-4 text-primary">{content}</h2>;
    case 'paragraph':
      return <p className="mb-6 text-lg leading-relaxed text-foreground/90">{content}</p>;
    case 'image':
      const image = PlaceHolderImages.find(img => img.id === content);
      if (!image) return null;
      return (
        <figure className="my-8">
          <Link href="/" target="_blank" rel="noopener noreferrer" className="block group cursor-pointer">
            <ScrollFadeIn>
              <Image
                src={image.imageUrl}
                alt={image.description}
                width={800}
                height={500}
                className="rounded-lg shadow-lg mx-auto w-full max-w-4xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                data-ai-hint={image.imageHint}
              />
            </ScrollFadeIn>
          </Link>
          <figcaption className="text-center text-sm text-muted-foreground mt-3">{image.description}</figcaption>
        </figure>
      );
    default:
      return null;
  }
}

export function BlogPostClientPage({ post, relatedPosts }: { post: BlogPost, relatedPosts: BlogPost[] }) {
  const featuredImage = PlaceHolderImages.find(img => img.id === post.featuredImageId);
  
  return (
    <article>
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <Badge variant="secondary" className="mb-4 uppercase tracking-wider text-sm font-semibold">{post.category}</Badge>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">{post.title}</h1>
          <div className="text-muted-foreground">
            <span>By {post.author}</span> &middot; <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </header>

        {featuredImage && (
          <div className="mb-8">
             <Link href="/" target="_blank" rel="noopener noreferrer" className="block group cursor-pointer">
              <ScrollFadeIn>
                <Image
                  src={featuredImage.imageUrl}
                  alt={post.title}
                  width={1200}
                  height={600}
                  className="rounded-xl shadow-lg w-full object-cover aspect-video transition-transform duration-500 ease-in-out group-hover:scale-105"
                  priority
                  data-ai-hint={featuredImage.imageHint}
                />
              </ScrollFadeIn>
            </Link>
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          {post.content.map((contentItem, index) => (
            <ContentRenderer key={index} contentItem={contentItem} />
          ))}
        </div>

        <div className="mt-12 py-6 border-t">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
          </div>
        </div>
      </div>

      {relatedPosts.length > 0 && (
        <aside className="mt-16">
          <h2 className="font-headline text-3xl font-bold text-center mb-8">Related Posts</h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedPosts.map(relatedPost => (
              <BlogCard key={relatedPost.slug} post={relatedPost} />
            ))}
          </div>
        </aside>
      )}
    </article>
  );
}
