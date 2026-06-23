import { Button } from '@/components/Button'
import { Container } from '@/components/layout/Container'
import { SocialLinksRow } from '@/components/shared/SocialLinksRow'
import { cvUrl, email } from '@/config/infoConfig'

export default function ContactSection() {
  return (
    <section id="contact" className="mt-24 scroll-mt-32">
      <Container>
        <div className="rounded-3xl border border-muted bg-card/80 p-8 shadow-sm backdrop-blur sm:p-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Let&apos;s build something
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Open to founding engineer, full-stack, and mobile roles at UK AI-native and fintech companies. Also happy to talk Spontai, trading cards, or Japan.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={`mailto:${email}`}>Email me</Button>
              <Button href={cvUrl} variant="secondary" download="Mihir Gandecha CV.pdf">
                Download CV
              </Button>
            </div>

            <SocialLinksRow className="mt-8 justify-start" />
          </div>
        </div>
      </Container>
    </section>
  )
}