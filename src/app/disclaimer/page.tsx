import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Disclaimer | CryptoVerse Explorer',
    description: 'Disclaimer for CryptoVerse Explorer. The information provided is for educational purposes only and not financial advice.',
};

export default function DisclaimerPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8 py-8">
            <section className="text-center">
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
                    Disclaimer
                </h1>
            </section>

            <section className="prose prose-lg max-w-none text-foreground/90 mx-auto">
                <p>
                    The information provided by CryptoVerse Explorer ("we," "us," or "our") on this website is for general informational and educational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
                </p>
                
                <h2>Not Financial Advice</h2>
                <p>
                    The content on this website is not intended to be a substitute for professional financial advice. The cryptocurrency market is highly volatile and carries a high risk. Always seek the advice of a qualified financial advisor with any questions you may have regarding your investment strategy. Never disregard professional financial advice or delay in seeking it because of something you have read on this website.
                </p>

                <h2>External Links Disclaimer</h2>
                <p>
                    The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
                </p>
            </section>
        </div>
    );
}
