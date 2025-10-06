import '@/styles/globals.css'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import MainLayout from '@/layout/MainLayout'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'DevDanny Startseite | Entwickler, Tools & Projekte',
    template: '%s | DevDanny',
  },
  description:
    'Willkommen auf der Startseite von DevDanny – entdecke innovative Entwickler-Tools, spannende Projekte und Ressourcen rund um Webentwicklung, Marketing & SEO.',
  keywords: [
    'DevDanny',
    'Webentwicklung',
    'Entwickler Tools',
    'Next.js Projekte',
    'App Entwicklung',
    'SEO Optimierung',
    'Marketing Tools',
    'Programmierung',
    'Portfolio',
    'Softwareentwicklung',
  ],
  authors: [
    {
      name: 'DevDanny',
      url: 'https://www.devdanny.de',
    },
  ],
  creator: 'DevDanny',
  publisher: 'DevDanny',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: '/manifest.json',
  generator: 'Next.js',
  applicationName: 'DevDanny Startseite',
  metadataBase: new URL('https://startseite.devdanny.de'),
  alternates: {
    canonical: 'https://startseite.devdanny.de',
    languages: {
      de: 'https://startseite.devdanny.de',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://startseite.devdanny.de',
    siteName: 'DevDanny',
    title: 'DevDanny Startseite | Entwickler, Tools & Projekte',
    description:
      'Erfahre mehr über DevDanny – Entwickler, kreative Tools, Open-Source-Projekte und Wissen zu Marketing & SEO.',
    images: [
      {
        url: 'https://startseite.devdanny.de/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DevDanny Startseite',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevDanny Startseite',
    description: 'Entdecke Tools, Projekte und Wissen von DevDanny.',
    creator: '@devdanny',
    images: ['https://startseite.devdanny.de/images/twitter-image.jpg'],
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
  // verification: {
  //   google: 'Zm1fu2IvoHYKcCyT0geY8183MM5QvHyfoz6jRI23vcE',
  // },
  category: 'developer portfolio',
  icons: {
    icon: [
      {
        url: '/icons/favicon.ico',
        sizes: '16x16 32x32 48x48 256x256',
        type: 'image/x-icon',
      },
      { url: '/icons/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/icon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icons/icon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
      { url: '/icons/logo.svg', type: 'image/svg+xml' },
    ],
    apple: [
      {
        url: '/icons/icon-180x180.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'icon',
        url: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/icons/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: 'DevDanny Startseite',
    statusBarStyle: 'black-translucent',
  },
}


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
