import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollFadeIn } from '@/components/scroll-fade-in';

export default function AboutPage() {
    const teamImage = PlaceHolderImages.find(img => img.id === 'crypto-14');
    
    return (
        <div className="space-y-12">
            <section className="text-center">
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
                    About CryptoVerse Explorer
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    We are a passionate team of cryptocurrency enthusiasts, developers, and writers dedicated to demystifying the world of blockchain and digital assets. Our mission is to provide clear, accurate, and timely information to help you navigate the exciting and fast-paced crypto landscape.
                </p>
            </section>

            {teamImage && (
                <section>
                    <ScrollFadeIn>
                        <Image
                            src={teamImage.imageUrl}
                            alt="Our Team"
                            width={1200}
                            height={600}
                            className="rounded-xl shadow-lg w-full object-cover aspect-video"
                            data-ai-hint={teamImage.imageHint} />
                    </ScrollFadeIn>
                </section>
            )}

            <section className="max-w-4xl mx-auto text-lg leading-relaxed">
                 <h2 className="font-headline text-3xl font-bold text-primary mb-6 text-center">Our Vision</h2>
                 <p className="mb-4">
                    At CryptoVerse Explorer, we believe that blockchain technology has the potential to revolutionize industries and empower individuals. We aim to be the most trusted resource for both newcomers and seasoned crypto veterans. We strive to break down complex topics into easy-to-understand articles, guides, and analyses.
                 </p>
                 <p>
                    Whether you're taking your first steps into crypto or you're a DeFi expert, we're here to provide the insights you need to stay ahead. Welcome to our community!
                 </p>
            </section>
        </div>
    );
}
