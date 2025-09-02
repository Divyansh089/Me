import { Metadata } from 'next';

export const defaultSEO: Metadata = {
  title: 'Divyansh Patel — Blockchain Developer',
  description: 'Blockchain Developer building secure, scalable Web3 applications. Solidity • Hardhat • Ethers.js • IPFS • Node.js',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://divyansh-patel.vercel.app',
    siteName: 'Divyansh Patel Portfolio',
    title: 'Divyansh Patel — Blockchain Developer',
    description: 'Blockchain Developer building secure, scalable Web3 applications',
    images: [
      {
        url: '/images/og.png',
        width: 1200,
        height: 630,
        alt: 'Divyansh Patel - Blockchain Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Divyansh Patel — Blockchain Developer',
    description: 'Blockchain Developer building secure, scalable Web3 applications',
    images: ['/images/og.png'],
  },
  keywords: ['blockchain', 'developer', 'solidity', 'web3', 'ethereum', 'smart contracts', 'dapp', 'defi'],
  authors: [{ name: 'Divyansh Patel' }],
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://divyansh-patel.vercel.app',
  },
};

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Divyansh Patel',
  jobTitle: 'Blockchain Developer',
  description: 'Aspiring Blockchain Developer with hands-on experience building and deploying smart contracts',
  url: 'https://divyansh-patel.vercel.app',
  sameAs: [
    'https://github.com/Divyansh089',
    'https://linkedin.com/in/pateldivyansh131',
  ],
  email: 'pateldivyansh131@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bareilly',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  },
  telephone: '+91-7906941751',
  knowsAbout: [
    'Solidity',
    'Smart Contracts',
    'Web3 Development',
    'Blockchain Technology',
    'Ethereum',
    'IPFS',
    'Node.js',
    'React',
  ],
};

