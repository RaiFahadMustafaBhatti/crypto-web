import { blogData, type BlogPost } from '@/lib/blog-data';
import { notFound } from 'next/navigation';
import { BlogCard } from '@/components/blog-card';
import { PaginationControls } from '@/components/pagination-controls';
import { AdPlaceholder } from '@/components/ad-placeholder';
import {unslugify} from '@/lib/utils';
import type { Metadata } from 'next'

const POSTS_PER_PAGE = 6;

type Props = {
  params: { categoryName: string }
  searchParams: { [key: string]: string | string[] | undefined };
}

function getCategoryDisplayName(categorySlug: string): string {
    const post = blogData.find(p => p.category.toLowerCase().replace(/\s+/g, '-') === categorySlug);
    return post ? post.category : unslugify(categorySlug);
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const categoryName = getCategoryDisplayName(params.categoryName);
 
  return {
    title: `${categoryName} | CryptoVerse Explorer`,
    description: `Browse all articles in the ${categoryName} category on CryptoVerse Explorer.`,
  }
}

export default function CategoryPage({ params, searchParams }: Props) {
  const { categoryName } = params;
  const page = searchParams['page'] ?? '1';
  const currentPage = Number(page);

  const postsForCategory = blogData.filter(
    post => post.category.toLowerCase().replace(/\s+/g, '-') === categoryName
  );

  if (postsForCategory.length === 0) {
    notFound();
  }

  const totalPosts = postsForCategory.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const postsToShow = postsForCategory.slice(startIndex, endIndex);

  const displayName = getCategoryDisplayName(categoryName);

  return (
    <div className="space-y-12">
      <section className="text-center py-8 md:py-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
          Category: {displayName}
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Explore articles and news related to {displayName}.
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
          baseUrl={`/category/${categoryName}`}
        />
      )}
    </div>
  );
}

export async function generateStaticParams() {
  const categories = new Set(blogData.map(post => post.category.toLowerCase().replace(/\s+/g, '-')));
  return Array.from(categories).map(categoryName => ({
    categoryName,
  }));
}
