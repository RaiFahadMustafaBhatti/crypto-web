export function Logo({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className={className}
            aria-label="CryptoVerse Explorer Logo"
        >
            <rect width="256" height="256" fill="none" />
            <path
                d="M168,88H112a40,40,0,0,0,0,80h56"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
            />
            <line
                x1="140"
                y1="56"
                x2="140"
                y2="88"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
            />
            <line
                x1="140"
                y1="168"
                x2="140"
                y2="200"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
            />
            <path
                d="M88,88H32a8,8,0,0,0-8,8V160a8,8,0,0,0,8,8H88l40-40Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
            />
        </svg>
    );
}
