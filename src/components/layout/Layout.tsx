import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex w-full flex-col min-h-screen">
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
    </div>
  )
}
