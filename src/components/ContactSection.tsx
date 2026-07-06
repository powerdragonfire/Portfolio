import Link from 'next/link'
import { email, cvUrl } from '@/config/infoConfig'
import { SocialLinksRow } from '@/components/shared/SocialLinksRow'

export default function ContactSection() {
  return (
    <section id="contact" className="mt-16 mb-16 scroll-mt-20 border-t border-border pt-8">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        Contact
      </span>

      <div className="mt-6">
        <a
          href={`mailto:${email}`}
          className="group block text-display-lg font-display font-bold text-foreground hover:text-primary transition-colors duration-200 leading-tight tracking-tight break-all"
          aria-label={`Email ${email}`}
        >
          {email}
          <span className="ml-3 inline-block text-muted-foreground group-hover:text-primary transition-colors text-2xl align-middle">↗</span>
        </a>

        <p className="mt-6 max-w-xl text-sm text-muted-foreground leading-relaxed">
          Available for contract and freelance full-stack, mobile, and AI engineering work in London and
          remotely — as well as founding engineer roles at UK AI-native and fintech companies.
          Also happy to talk Spontai, trading cards, or Japan.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href={cvUrl} download="Mihir Gandecha CV.pdf" className="btn-ghost">
            Download CV
          </Link>
          <SocialLinksRow className="justify-start" />
        </div>
      </div>
    </section>
  )
}
