import type { Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/layout/Layout'
import '@/styles/tailwind.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://mihirgandecha.com'),
  title: 'Mihir Gandecha — Co-Founder CTO & Full-Stack Engineer',
  description:
    'Mobile + AI engineer based in London. Creator of Spontai, live iOS app on the App Store. Ex-Wellington Management, ex-Mynt Finance.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Mihir Gandecha — Co-Founder CTO & Full-Stack Engineer',
    description:
      'Mobile + AI engineer based in London. Creator of Spontai, live iOS app on the App Store. Ex-Wellington Management, ex-Mynt Finance.',
    url: 'https://mihirgandecha.com',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mihir Gandecha — Co-Founder CTO & Full-Stack Engineer',
    description:
      'Mobile + AI engineer based in London. Creator of Spontai, live iOS app on the App Store. Ex-Wellington Management, ex-Mynt Finance.',
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
      <body className="flex h-full">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
