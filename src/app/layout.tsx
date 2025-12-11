import '@/styles/globals.css'
import type { Metadata, Viewport } from 'next'
import MainLayout from '@/layout/MainLayout'

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
  generator: 'Next.js',
  applicationName: 'DevDanny Startseite',
  metadataBase: new URL('https://startseite.devdanny.de'),
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
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
