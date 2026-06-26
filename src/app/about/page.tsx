import { type Metadata } from 'next'
import { aboutParagraphs, aboutStats, skillStack } from '@/config/infoConfig'
import { Container } from '@/components/layout/Container'
import { PhotoCarousel, type CarouselPhoto } from '@/components/PhotoCarousel'

const aboutPhotos: CarouselPhoto[] = [
  {
    src: '/images/mihir-graduation.jpg',
    alt: 'Mihir Gandecha',
  },
  {
    src: '/images/mihir-grad-group.jpg',
    alt: 'Mihir Gandecha',
  },
  // Add more photos here — drop them in /public/images/ and reference them below
  // { src: '/images/mihir-2.jpg', alt: 'Mihir Gandecha' },
]

export const metadata: Metadata = {
  title: 'About',
  description:
    'Full-Stack Engineer and Co-Founder CTO based in London, building AI-native mobile and fintech products.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-24">
      {/* Eyebrow */}
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        About
      </p>

      {/* Bold opening statement */}
      <h1 className="text-display-xl mt-6 font-display font-bold leading-tight tracking-tight text-foreground">
        I build the software layer between good ideas and real users.
      </h1>

      {/* Photo carousel */}
      <div className="mt-10">
        <PhotoCarousel photos={aboutPhotos} />
      </div>

      {/* Bio + stats */}
      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground lg:col-span-2">
          {aboutParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="space-y-3">
          {aboutStats.map((stat) => {
            const body = (
              <>
                <p className="font-display text-2xl font-bold tabular-nums tracking-tight text-primary">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
                {stat.hrefLabel && (
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-foreground">
                    {stat.hrefLabel} ↗
                  </p>
                )}
              </>
            )

            return stat.href ? (
              <a
                key={stat.value}
                href={stat.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-border p-5 transition-colors hover:border-primary/40"
              >
                {body}
              </a>
            ) : (
              <div key={stat.value} className="border border-border p-5">
                {body}
              </div>
            )
          })}
        </div>
      </div>

      {/* Skill stack */}
      <div className="mt-20 border-t border-border pt-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Stack
        </p>
        <dl className="mt-8 grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
          {skillStack.map((group) => (
            <div
              key={group.category}
              className="flex flex-col gap-3 border-b border-border pb-6 sm:flex-row sm:items-baseline sm:gap-6"
            >
              <dt className="w-20 flex-none font-mono text-xs uppercase tracking-widest text-primary">
                {group.category}
              </dt>
              <dd className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Container>
  )
}
