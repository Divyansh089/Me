import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Divyansh Patel — Blockchain Developer',
  description: 'Blockchain Developer building secure, scalable Web3 applications. Solidity • Hardhat • Ethers.js • IPFS • Node.js',
  keywords: ['blockchain', 'developer', 'solidity', 'web3', 'ethereum', 'smart contracts', 'dapp', 'defi'],
  authors: [{ name: 'Divyansh Patel' }],
  creator: 'Divyansh Patel',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Divyansh Patel — Blockchain Developer',
    description: 'Blockchain Developer building secure, scalable Web3 applications',
    url: 'https://divyansh-patel.vercel.app',
    siteName: 'Divyansh Patel Portfolio',
    images: [
      {
        url: '/images/og.png',
        width: 1200,
        height: 630,
        alt: 'Divyansh Patel - Blockchain Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Divyansh Patel — Blockchain Developer',
    description: 'Blockchain Developer building secure, scalable Web3 applications',
    images: ['/images/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          <SiteHeader />
          <main className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
