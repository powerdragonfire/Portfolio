import { type Metadata } from 'next'
import {
  aboutMeHeadline,
  aboutParagraphs,
  aboutStats,
  skillStack,
} from '@/config/infoConfig'
import { Container } from '@/components/layout/Container'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Full-Stack Engineer and Co-Founder CTO based in London, building AI-native mobile and fintech products.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      {/* Eyebrow + headline */}
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        About
      </p>
      <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        {aboutMeHeadline}
      </h1>

      {/* Two columns: bio left, stats right */}
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
        <div className="space-y-6 text-base text-muted-foreground lg:col-span-2">
          {aboutParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="space-y-4">
          {aboutStats.map((stat) => {
            const body = (
              <>
                <p className="flex items-center gap-1.5 text-2xl font-semibold tracking-tight text-foreground tabular-nums">
                  {stat.value}
                  {stat.href && (
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 flex-none text-muted-foreground transition group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    >
                      <path d="M7 17 17 7M7 7h10v10" />
                    </svg>
                  )}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
                {stat.hrefLabel && (
                  <p className="mt-3 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    {stat.hrefLabel}
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
                className="group block rounded-2xl border border-muted p-5 shadow-sm transition hover:border-foreground/20 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {body}
              </a>
            ) : (
              <div
                key={stat.value}
                className="rounded-2xl border border-muted p-5 shadow-sm"
              >
                {body}
              </div>
            )
          })}
        </div>
      </div>

      {/* Skill stack grouped by category */}
      <div className="mt-16 border-t border-muted pt-10">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Stack
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
          {skillStack.map((group) => (
            <div
              key={group.category}
              className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-6"
            >
              <dt className="w-20 flex-none text-sm font-medium text-foreground">
                {group.category}
              </dt>
              <dd className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-muted px-2.5 py-1 text-sm text-muted-foreground"
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
