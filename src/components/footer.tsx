export function Footer() {
  return (
    <footer className="bg-card border-t mt-16">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} CryptoVerse Explorer. All rights reserved.</p>
        <p className="mt-2">Your premier destination for crypto news and insights.</p>
      </div>
    </footer>
  );
}
