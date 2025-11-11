import { notFound } from 'next/navigation';
import { blogData } from '@/lib/blog-data';
import { BlogPostClientPage } from './blog-post-client-page';
import type { Metadata } from 'next'

type Props = {
  params: { slug: string }
}

async function getPostAndRelated(slug: string) {
  const post = blogData.find((p) => p.slug === slug);
  if (!post) {
    return { post: null, relatedPosts: [] };
  }

  const relatedPosts = blogData
    .filter((p) => {
      // Must be a different post and share at least one tag
      return p.slug !== slug && p.tags.some(tag => post.tags.includes(tag));
    })
    .slice(0, 4);

  return { post, relatedPosts };
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { post } = await getPostAndRelated(params.slug);
 
  if (!post) {
    return {
        title: "Post Not Found",
        description: "This blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | CryptoVerse Explorer`,
    description: post.excerpt,
    openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        url: `/blog/${post.slug}`,
    }
  }
}

export default async function BlogPostPage({ params }: { params: { slug:string } }) {
  const { post, relatedPosts } = await getPostAndRelated(params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPostClientPage post={post} relatedPosts={relatedPosts} />;
}

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}
