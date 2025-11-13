export function Logo({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className={className}
            aria-label="CryptoVerse Explorer Logo"
            >
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor: 'hsl(var(--accent))', stopOpacity:1}} />
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: 'hsl(240, 100%, 80%)'}} />
                <stop offset="100%" style={{stopColor: 'hsl(280, 100%, 80%)'}} />
                </linearGradient>
            </defs>
            <path fill="none" stroke="url(#grad1)" strokeWidth="8" d="M128 224a96 96 0 1 0 0-192 96 96 0 0 0 0 192z"></path>
            <path fill="none" stroke="hsl(var(--foreground))" opacity="0.2" strokeWidth="4" strokeLinecap="round" d="M128 48v-16 m0 176v16 m-80-80H32m176 0h-16"></path>
            
            {/* Compass points */}
            <path fill="url(#grad1)" d="M128 16l-20 40h40L128 16z"></path>
            <path fill="url(#grad1)" d="M128 240l20-40h-40l20 40z"></path>
            <path fill="url(#grad1)" d="M16 128l40-20v40L16 128z"></path>
            <path fill="url(#grad1)" d="M240 128l-40 20V108l40 20z"></path>

            {/* Globe */}
            <circle cx="128" cy="128" r="48" fill="none" stroke="hsl(var(--primary))" strokeWidth="4" />
            <path d="M128 80a72.2 72.2 0 0 1 48 20 M80 148a72.2 72.2 0 0 1 48-20" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
            <path d="M104 88a72.2 72.2 0 0 1 48 20M80 128a72.2 72.2 0 0 1 48-20" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
            
            {/* Rocket */}
            <g transform="rotate(-45 128 128) translate(-10, -10)">
                <path d="M185.3,98.7a24,24,0,0,0-34-34L130,86l22,22Z" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="4" />
                <path d="M151.3,64.7,174,42a8,8,0,0,1,11.3,11.3L163,76" fill="hsl(var(--accent))" stroke="hsl(var(--accent))" strokeWidth="4" />
                <circle cx="146" cy="74" r="8" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" />
                <path d="M130,86l-12,4,4-12,18-18,22,22Z" fill="url(#grad2)" />
                <path d="M118,90s-16,8-16,24c0,8.8,7.2,16,16,16s16-7.2,16-16C134,106,131,95,118,90Z" fill="hsl(var(--accent))" opacity="0.8" />
                 <path d="M118,90s-10,5-10,16" fill="none" stroke="hsl(var(--card))" strokeWidth="2" strokeLinecap="round" />
            </g>
        </svg>
    );
}
