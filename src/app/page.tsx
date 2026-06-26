import { Container } from '@/components/layout/Container'
import Career from '@/components/home/Career'
import Education from '@/components/home/Education'
import ContactSection from '@/components/ContactSection'
import { HeroSection } from '@/components/home/HeroSection'
import { Marquee } from '@/components/home/Marquee'
import { ProjectsGrid } from '@/components/home/ProjectsGrid'

export default async function Home() {
  return (
    <>
      <Container>
        <HeroSection />
      </Container>

      {/* Marquee strip — full bleed */}
      <Marquee />

      <Container className="mt-4">
        <ProjectsGrid />

        {/* Career + Education */}
        <div className="mt-24 border-t border-border pt-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Experience
          </span>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16">
          <Career />
          <Education />
        </div>

        <ContactSection />
      </Container>
    </>
  )
}
