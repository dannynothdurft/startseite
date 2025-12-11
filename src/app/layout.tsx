import '@/styles/globals.css'
import type { Metadata } from 'next'
import MainLayout from '@/layout/MainLayout'

export const metadata: Metadata = {
  title: 'DevDanny Startseite',
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
