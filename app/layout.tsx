import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '3DGhar – Nepal\'s First 3D Smart Real Estate Platform | Launching 2026',
  description: '3DGhar.com — Nepal\'s first 3D smart real estate platform. Explore verified properties with immersive 3D tours, professional photography, AI-powered price estimates, and everything you need to find your dream home. Launching January 2026.',
  keywords: [
    '3D real estate Nepal',
    'Nepal property',
    '3D virtual tours',
    'Nepal real estate',
    'buy house Nepal',
    'sell property Nepal',
    '3DGhar',
    'real estate Kathmandu',
    'Nepal housing',
    'property marketplace Nepal'
  ],
  authors: [{ name: '3D Ghar Technology Pvt. Ltd.' }],
  creator: '3D Ghar Technology Pvt. Ltd.',
  publisher: '3D Ghar Technology Pvt. Ltd.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://3dghar.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '3DGhar – Nepal\'s First 3D Smart Real Estate Platform',
    description: 'Explore verified properties with immersive 3D tours, professional photography, and AI-powered price estimates. Launching January 2026.',
    url: 'https://3dghar.com',
    siteName: '3DGhar',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: '3DGhar - Nepal\'s First 3D Smart Real Estate Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3DGhar – Nepal\'s First 3D Smart Real Estate Platform',
    description: 'Explore properties with immersive 3D tours. Launching January 2026.',
    images: ['/hero-bg.jpg'],
    creator: '@3DGharOfficial',
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
  verification: {
    // Add these when you get them from Google Search Console
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Favicons - cache busted for updated logo */}
        <link rel="icon" href="/logo/favicon.ico?v=3" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/logo/3dghar-logo.svg?v=3" />
        <link rel="icon" type="image/png" sizes="96x96" href="/logo/favicon-96x96.png?v=3" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo/apple-touch-icon.png?v=3" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/logo/site.webmanifest" />
        
        {/* Theme Colors */}
        <meta name="theme-color" content="#0EA5E9" />
        <meta name="msapplication-TileColor" content="#0EA5E9" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}


