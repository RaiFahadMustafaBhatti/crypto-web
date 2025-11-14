
import { Suspense } from 'react';
import { SearchClientPage } from './search-client-page';

function SearchLoading() {
    return (
        <div className="space-y-12">
            <section className="text-center py-8 md:py-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
                Search Results
                </h1>
            </section>
            <div className="text-center py-16">
                <h2 className="text-2xl font-bold text-muted-foreground">Loading search results...</h2>
            </div>
        </div>
    )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchLoading />}>
      <SearchClientPage />
    </Suspense>
  );
}
