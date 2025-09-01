export interface Project {
  title: string;
  tags: string[];
  summary: string;
  bullets: string[];
  repo: string;
  live: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "QuickSafe — Decentralized Supply Chain dApp",
    tags: ["Solidity", "Hardhat", "Node/TS", "MongoDB", "Ethers.js"],
    summary:
      "On-chain shipment state machine with RBAC, indexed events, and real-time dashboard.",
    bullets: [
      "Designed shipment state machine contracts with role-based access; each transition emitted indexed events for provable audit trail.",
      "Optimized storage layout (struct packing + custom errors); reduced gas ~28% on core transactions.",
      "Secured contracts via checks-effects-interactions, modifiers, and static analysis (Slither, Echidna).",
      "Integrated on-chain events with a front-end dashboard; added monitoring alerts for data consistency."
    ],
    repo: "https://github.com/Divyansh089/supply-chain-management",
    live: "https://quick-safe-psi.vercel.app/",
    image: "/images/quicksafe.png"
  },
  {
    title: "TrustMed — Decentralized Healthcare",
    tags: ["Solidity", "Next.js", "Node/TS", "IPFS", "Prisma", "Redis"],
    summary:
      "Web3 healthcare DApp with consent, IPFS-backed records, realtime chat, and on-chain escrow payments.",
    bullets: [
      "Modeled patient consent, appointment, and prescription flows in Solidity; reduced gas 27% (struct packing, custom errors).",
      "Anchored record CIDs + SHA-256 on-chain; encrypted files on IPFS for verifiable integrity.",
      "Realtime doctor–patient messaging via WebSockets; handled 1,000+ concurrent clients (p95 112ms).",
      "On-chain escrow + MetaMask; idempotent reconciliation prevents double charges."
    ],
    repo: "https://github.com/Divyansh089/TrustMed",
    live: "https://trust-med-beta.vercel.app/",
    image: "/images/trustmed.png"
  },
  {
    title: "E-Commerce App",
    tags: ["React", "Node", "MongoDB", "JWT", "Redis"],
    summary:
      "Full-stack store with auth, cart/checkout, caching, and performance improvements.",
    bullets: [
      "Server-side pagination/search; responsive, mobile-first UI.",
      "Auth with bcrypt + JWT; protected routes and role-based access.",
      "Idempotent order tokens & stock checks; prevented duplicate orders (99.7%).",
      "Compound indexes + Redis cache; DB load −35%, TTFB −120ms."
    ],
    repo: "https://github.com/Divyansh089/Apple-store",
    live: "https://apple-store-ten-chi.vercel.app/",
    image: "/images/ecommerce.png"
  }
];
