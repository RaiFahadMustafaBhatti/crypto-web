import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms and Conditions | CryptoVerse Explorer',
    description: 'Read the terms and conditions for using the CryptoVerse Explorer website.',
};

export default function TermsAndConditionsPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8 py-8">
            <section className="text-center">
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
                    Terms and Conditions
                </h1>
                 <p className="text-lg text-muted-foreground">
                    Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
            </section>

            <section className="prose prose-lg max-w-none text-foreground/90 mx-auto">
                <h2>1. Agreement to Terms</h2>
                <p>
                    By using our website, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, you may not use our services.
                </p>
                
                <h2>2. Intellectual Property Rights</h2>
                <p>
                    Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us.
                </p>

                <h2>3. User Representations</h2>
                <p>
                    By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms and Conditions; (2) you will not use the Site for any illegal or unauthorized purpose; and (3) your use of the Site will not violate any applicable law or regulation.
                </p>
                
                <h2>4. Governing Law</h2>
                <p>
                    These conditions are governed by and interpreted following the laws of the United States, and the use of the United Nations Convention of Contracts for the International Sale of Goods is expressly excluded.
                </p>
            </section>
        </div>
    );
}
