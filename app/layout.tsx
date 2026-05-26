import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Nunito, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
})

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jbmono',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.strikepath.co'),
  title: {
    template: '%s | StrikePath',
    default: 'StrikePath | AI Chatbots, Automation, Receptionists & Marketing for Businesses',
  },
  description:
    'StrikePath builds AI-powered chatbots, automation workflows, AI receptionists, and marketing tools that save businesses time and money. Serving businesses nationwide.',
  openGraph: {
    type: 'website',
    siteName: 'StrikePath',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'StrikePath — AI Chatbots, Automation, Receptionists & Marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@StrikePathAI',
    creator: '@StrikePathAI',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${nunito.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>{children}</body>
    </html>
  )
}
