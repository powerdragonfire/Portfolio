import type { Metadata } from 'next'
import { Bricolage_Grotesque, JetBrains_Mono, Inter } from 'next/font/google'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/layout/Layout'
import { structuredData } from '@/lib/structuredData'
import '@/styles/tailwind.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  axes: ['opsz', 'wdth'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const siteTitle = 'Mihir Gandecha — Contract Software Engineer & Co-Founder CTO, London'
const siteDescription =
  'Contract Software Engineer based in London, available for full-stack, mobile, and AI engineering projects. Creator of Spontai, live iOS app on the App Store. Ex-Wellington Management, ex-Mynt Finance.'

export const metadata: Metadata = {
  metadataBase: new URL('https://mihirgandecha.com'),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: 'https://mihirgandecha.com',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className={`flex h-full ${bricolage.variable} ${jetbrainsMono.variable} ${inter.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
