import { BlogCard } from '@/components/blog-card';
import { PaginationControls } from '@/components/pagination-controls';
import { blogData } from '@/lib/blog-data';

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
      <section className="text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
          Explore the CryptoVerse
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Your ultimate guide to understanding the world of digital currencies, blockchain, and decentralized finance.
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postsToShow.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
      
      {totalPages > 1 && (
        <PaginationControls 
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
}
