export type BlogContent = {
  type: 'paragraph' | 'image' | 'heading';
  content: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  featuredImageId: string;
  category: string;
  tags: string[];
  excerpt: string;
  content: BlogContent[];
};

export const blogData: BlogPost[] = [
  {
    slug: 'ai-in-blockchain-the-new-frontier',
    title: "AI in Blockchain: The New Frontier of Trust and Intelligence",
    date: '2024-08-15',
    author: 'Dr. Evelyn Reed',
    featuredImageId: 'crypto-1',
    category: 'Future Tech',
    tags: ['AI', 'Blockchain', 'Web3', 'Innovation'],
    excerpt: 'Artificial Intelligence and Blockchain are two of the most transformative technologies of our time. When combined, they have the potential to create systems that are not only secure and transparent, but also intelligent and autonomous.',
    content: [
      { type: 'paragraph', content: 'The convergence of AI and blockchain is poised to revolutionize industries by enhancing security, enabling intelligent automation, and creating new business models. This synergy allows for decentralized AI networks where data and models can be shared securely and transparently.' },
      { type: 'heading', content: 'Decentralized Intelligence' },
      { type: 'paragraph', content: 'Imagine a world where AI agents can conduct complex transactions and analysis on a trustless platform. Blockchain provides this foundation, ensuring that AI-driven decisions are auditable and tamper-proof. This is particularly crucial in fields like supply chain management, finance, and healthcare.' },
      { type: 'image', content: 'crypto-2' },
      { type: 'paragraph', content: 'Furthermore, AI can optimize blockchain performance by predicting network congestion and improving consensus mechanisms, making blockchains more efficient and scalable.' },
    ],
  },
  {
    slug: 'real-world-assets-tokenization',
    title: 'The Tokenization of Real-World Assets (RWAs)',
    date: '2024-08-12',
    author: 'Jian Li',
    featuredImageId: 'crypto-3',
    category: 'DeFi',
    tags: ['RWA', 'Tokenization', 'DeFi', 'Investing'],
    excerpt: 'The next wave of DeFi innovation is here: tokenizing real-world assets. From real estate to fine art, blockchain is turning illiquid assets into tradable digital tokens, unlocking trillions in value.',
    content: [
      { type: 'paragraph', content: 'Tokenization represents a bridge between traditional finance and the digital asset world. By creating a digital token that represents ownership of a real-world asset (RWA), we can trade previously illiquid items like real estate, private equity, and fine art on blockchain-based marketplaces with unprecedented efficiency and transparency.' },
      { type: 'heading', content: 'Why is this a Game-Changer?' },
      { type: 'paragraph', content: 'This process offers fractional ownership, allowing smaller investors to access high-value assets. It also provides global liquidity, 24/7 markets, and reduces administrative overhead through smart contracts. The potential market for tokenized RWAs is estimated to be in the trillions of dollars.' },
      { type: 'image', content: 'crypto-4' },
    ],
  },
  {
    slug: 'the-evolution-of-web3-gaming',
    title: 'Beyond Play-to-Earn: The Evolution of Web3 Gaming',
    date: '2024-08-10',
    author: 'Ben Carter',
    featuredImageId: 'crypto-5',
    category: 'Gaming',
    tags: ['Web3', 'Gaming', 'NFTs', 'Metaverse'],
    excerpt: 'Web3 gaming is evolving beyond simple play-to-earn models. The future lies in creating immersive experiences with true digital ownership, player-driven economies, and interoperable assets.',
    content: [
      { type: 'paragraph', content: 'Early Web3 games focused heavily on the "earn" component, often at the expense of gameplay. The next generation of blockchain games is shifting focus to "play-and-own," prioritizing fun, engaging mechanics while using NFTs to give players true ownership of their in-game items, characters, and even game data.' },
      { type: 'heading', content: 'Sustainable Economies and Interoperability' },
       { type: 'paragraph', content: 'Developers are now building sustainable in-game economies that reward skill and participation. The ultimate vision is interoperability, where a player could use an item or character from one game in a completely different virtual world, creating a true, interconnected Metaverse.' },
    ],
  },
  {
    slug: 'zero-knowledge-proofs-explained',
    title: 'Zero-Knowledge Proofs: Privacy Meets Scalability',
    date: '2024-08-05',
    author: 'Olivia White',
    featuredImageId: 'crypto-6',
    category: 'Technology',
    tags: ['ZK-Proofs', 'Privacy', 'Scaling', 'Cryptography'],
    excerpt: 'Zero-Knowledge (ZK) proofs are a cryptographic breakthrough that allow one party to prove to another that a statement is true, without revealing any information beyond the validity of the statement itself.',
    content: [
        { type: 'paragraph', content: 'In the context of blockchain, ZK-proofs are a game-changer for both privacy and scalability. They allow for private transactions on public ledgers and enable Layer 2 scaling solutions (like ZK-rollups) to bundle thousands of transactions into a single proof, drastically increasing throughput.' },
        { type: 'image', content: 'crypto-6' },
    ],
  },
  {
    slug: 'navigating-the-modular-blockchain-era',
    title: 'Navigating the Modular Blockchain Era',
    date: '2024-08-01',
    author: 'Dr. Evelyn Reed',
    featuredImageId: 'crypto-7',
    category: 'Technology',
    tags: ['Modular', 'Blockchain', 'Layer 2', 'Celestia'],
    excerpt: 'The future of blockchain architecture is modular. Instead of one chain doing everything, specialized layers for execution, settlement, and data availability are creating a more scalable and customizable landscape.',
    content: [
        { type: 'paragraph', content: 'Monolithic blockchains like the early Ethereum network handle all tasks—execution, settlement, and data availability—on a single layer. The modular thesis argues for separating these functions. This allows for optimization at each layer, leading to massive gains in scalability and flexibility for developers.' },
        { type: 'image', content: 'crypto-8' },
    ],
  },
  {
    slug: 'restaking-the-next-defi-primitive',
    title: 'Restaking: The Next DeFi Primitive on Ethereum',
    date: '2024-07-28',
    author: 'Jian Li',
    featuredImageId: 'crypto-9',
    category: 'DeFi',
    tags: ['Restaking', 'DeFi', 'Ethereum', 'EigenLayer'],
    excerpt: 'Restaking is a new mechanism in DeFi that allows users to secure multiple networks by re-using their staked ETH. It promises to enhance network security and create new yield opportunities.',
    content: [
      { type: 'paragraph', content: 'Pioneered by protocols like EigenLayer, restaking allows staked ETH to be used to secure other protocols, known as Actively Validated Services (AVSs). This creates a pooled security model, where new protocols can bootstrap their security from Ethereum\'s established validator set instead of having to build their own.' },
    ],
  },
   {
    slug: 'the-rise-of-decentralized-social-media',
    title: 'DeSo: The Rise of Decentralized Social Media',
    date: '2024-07-25',
    author: 'Ben Carter',
    featuredImageId: 'crypto-10',
    category: 'Web3',
    tags: ['DeSo', 'Social Media', 'Farcaster', 'Lens'],
    excerpt: 'Tired of centralized platforms controlling your data and content? Decentralized Social (DeSo) networks are emerging as a user-owned alternative, putting you back in control of your digital identity.',
    content: [
      { type: 'paragraph', content: 'Platforms like Farcaster and Lens Protocol are building social graphs on the blockchain. This means your profile, content, and connections are not locked into one platform. You can take your digital identity with you across different apps, and developers can build new experiences on top of shared social data.' },
      { type: 'image', content: 'crypto-11' },
    ],
  },
  {
    slug: 'account-abstraction-crypto-wallets-for-everyone',
    title: 'Account Abstraction: Crypto Wallets for Everyone',
    date: '2024-07-22',
    author: 'Olivia White',
    featuredImageId: 'crypto-12',
    category: 'Ethereum',
    tags: ['Account Abstraction', 'UX', 'Wallets', 'ERC-4337'],
    excerpt: 'Seed phrases and complex transaction signing have been major barriers to crypto adoption. Account Abstraction (AA) is set to change that by making crypto wallets as easy to use as regular web accounts.',
    content: [
      { type: 'paragraph', content: 'Account Abstraction, particularly through standards like ERC-4337 on Ethereum, turns user wallets into smart contracts. This enables features like social recovery (e.g., using friends or email to recover a lost account), gasless transactions, and batched transactions, dramatically improving the user experience.' },
    ],
  },
   {
    slug: 'bitcoin-ordinals-and-the-future-of-nfts',
    title: 'Bitcoin Ordinals and the Reinvention of NFTs',
    date: '2024-07-20',
    author: 'Dr. Evelyn Reed',
    featuredImageId: 'crypto-13',
    category: 'Bitcoin',
    tags: ['Bitcoin', 'NFTs', 'Ordinals', 'BRC-20'],
    excerpt: 'For years, NFTs were synonymous with Ethereum. The Ordinals protocol has changed the game, bringing complex digital artifacts directly onto the Bitcoin blockchain.',
    content: [
      { type: 'paragraph', content: 'The Ordinals protocol allows for the inscription of data, like images and text, onto individual satoshis (the smallest unit of Bitcoin). This creates Bitcoin-native NFTs that inherit the full security and decentralization of the Bitcoin network, sparking a new wave of innovation.' },
    ],
  },
   {
    slug: 'what-are-liquid-staking-derivatives',
    title: 'What Are Liquid Staking Derivatives (LSDs)?',
    date: '2024-07-18',
    author: 'Jian Li',
    featuredImageId: 'crypto-14',
    category: 'DeFi',
    tags: ['LSDs', 'Staking', 'DeFi', 'Liquidity'],
    excerpt: 'Staking your crypto often means locking it up, making it illiquid. Liquid Staking Derivatives (LSDs) solve this by giving you a tokenized version of your staked assets that you can use across DeFi.',
    content: [
      { type: 'paragraph', content: 'When you stake ETH through a protocol like Lido, you receive stETH in return. This stETH is an LSD—it represents your staked ETH and continues to accrue staking rewards, but you can also trade it, lend it, or use it as collateral in other DeFi applications, unlocking capital efficiency.' },
    ],
  },
];
