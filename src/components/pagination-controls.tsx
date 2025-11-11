import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type PaginationControlsProps = {
  currentPage: number;
  totalPages: number;
  baseUrl?: string;
};

export function PaginationControls({ currentPage, totalPages, baseUrl = '/' }: PaginationControlsProps) {
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const hasPrev = prevPage > 0;
  const hasNext = nextPage <= totalPages;

  return (
    <div className="flex justify-center items-center gap-4 mt-12">
      <Button asChild variant="outline" disabled={!hasPrev} className="disabled:cursor-not-allowed">
        <Link href={hasPrev ? `${baseUrl}?page=${prevPage}` : '#'} target="_blank" rel="noopener noreferrer">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous
        </Link>
      </Button>
      <span className="text-sm text-muted-foreground font-medium">
        Page {currentPage} of {totalPages}
      </span>
      <Button asChild variant="outline" disabled={!hasNext} className="disabled:cursor-not-allowed">
        <Link href={hasNext ? `${baseUrl}?page=${nextPage}` : '#'} target="_blank" rel="noopener noreferrer">
          Next
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}
