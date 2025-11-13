import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | CryptoVerse Explorer',
    description: 'Read the privacy policy for CryptoVerse Explorer to understand how we collect, use, and protect your data.',
};

export default function PrivacyPolicyPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8 py-8">
            <section className="text-center">
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
                    Privacy Policy
                </h1>
                <p className="text-lg text-muted-foreground">
                    Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
            </section>

            <section className="prose prose-lg max-w-none text-foreground/90 mx-auto">
                <p>
                    Welcome to CryptoVerse Explorer. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                </p>
                
                <h2>Information We Collect</h2>
                <p>
                    We may collect information about you in a variety of ways. The information we may collect on the Site includes personal data that you voluntarily provide to us when you register for the newsletter or contact us.
                </p>

                <h2>Use of Your Information</h2>
                <p>
                    Having accurate information permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to send you our newsletter, respond to your comments and questions, and monitor usage of our site to improve user experience.
                </p>

                <h2>Security of Your Information</h2>
                <p>
                    We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
                </p>

                <h2>Contact Us</h2>
                <p>
                    If you have questions or comments about this Privacy Policy, please contact us through our contact page.
                </p>
            </section>
        </div>
    );
}
