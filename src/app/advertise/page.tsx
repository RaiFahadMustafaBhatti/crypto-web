import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Advertise with Us | CryptoVerse Explorer',
    description: 'Reach our audience of cryptocurrency and blockchain enthusiasts. Explore our advertising opportunities.',
};

export default function AdvertisePage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8 py-8">
            <section className="text-center">
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
                    Advertise with Us
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Connect with a dedicated audience of crypto enthusiasts, investors, and developers.
                </p>
            </section>

            <section className="text-lg leading-relaxed space-y-4">
                <h2 className="font-headline text-3xl font-bold text-primary mb-6">Why Advertise on CryptoVerse Explorer?</h2>
                <p>
                    CryptoVerse Explorer is a premier destination for high-quality news, analysis, and education in the blockchain and cryptocurrency space. Our readers are passionate, engaged, and actively looking for the next big thing in the crypto world.
                </p>
                <p>
                    We offer a variety of advertising solutions, including:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Sponsored Content & Press Releases</li>
                    <li>Banner Advertisements on High-Traffic Pages</li>
                    <li>Newsletter Sponsorships</li>
                    <li>Custom Campaigns Tailored to Your Needs</li>
                </ul>
                <p>
                    To discuss opportunities and receive our media kit, please reach out to us through our contact page or email us directly at <a href="mailto:advertising@cryptoverse-explorer.com" className="text-primary hover:underline">advertising@cryptoverse-explorer.com</a>.
                </p>
            </section>
        </div>
    );
}
