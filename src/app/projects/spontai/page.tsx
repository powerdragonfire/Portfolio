'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin } from '@phosphor-icons/react'
import { appStoreUrl } from '@/config/infoConfig'

const DETAILS = [
  { tag: 'TIMELINE', value: 'Oct 2025 – Present' },
  { tag: 'TYPE', value: 'Mobile · AI · Travel' },
  { tag: 'ROLE', value: 'Co-Founder · CTO' },
  { tag: 'STATUS', value: 'Live · App Store' },
]

const METRICS = [
  { value: '2', label: 'countries live — UK + US App Store' },
  { value: '60+', label: 'Supabase migrations shipped' },
  { value: '20', label: 'edge functions in production' },
  { value: '50+', label: 'TestFlight signals per release cycle' },
]

const STACK = [
  { label: 'Client', value: 'React Native / Expo' },
  { label: 'Language', value: 'TypeScript' },
  { label: 'Data', value: 'Supabase · Postgres · pgvector' },
  { label: 'AI', value: 'Claude + OpenAI (RAG)' },
  { label: 'Release', value: 'EAS Build · App Store' },
  { label: 'Observability', value: 'Sentry · Cost Tracking' },
]

const BUILT = [
  {
    title: 'Product & Founding',
    body: 'Defined the roadmap and shipped fortnightly, prioritising against 50+ pieces of TestFlight feedback per cycle rather than internal opinion.',
  },
  {
    title: 'RAG Pipeline',
    body: 'Built the retrieval-augmented itinerary engine — routing between Claude and OpenAI, grounding generations in pgvector embeddings of real travel data.',
  },
  {
    title: 'Data & Infrastructure',
    body: 'Owns Supabase end to end: 60+ migrations and 20 edge functions covering auth, itinerary state, and background jobs.',
  },
  {
    title: 'Ops & Monitoring',
    body: 'Wired up Sentry for crash reporting and per-provider LLM cost tracking, so a spike in spend or errors surfaces before users notice it.',
  },
]

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

// Three-stop route with a hand-drawn dashed line — the shape of an itinerary being planned.
function RouteMap({ className = '' }: { className?: string }) {
  const pins = [
    { x: 20, y: 96 },
    { x: 68, y: 34 },
    { x: 112, y: 70 },
  ]
  const path = `M${pins[0].x},${pins[0].y} Q${(pins[0].x + pins[1].x) / 2},${pins[0].y - 24} ${pins[1].x},${pins[1].y} T${pins[2].x},${pins[2].y}`

  return (
    <svg width="128" height="128" viewBox="0 0 128 128" fill="none" className={className} aria-hidden>
      <motion.path
        d={path}
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: EASE, delay: 0.3 }}
      />
      {pins.map((p, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 + i * 0.45, ease: EASE }}
        >
          <circle cx={p.x} cy={p.y} r={i === pins.length - 1 ? 5 : 3.5} fill="hsl(var(--foreground))" />
          {i === pins.length - 1 && (
            <circle cx={p.x} cy={p.y} r="9" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" />
          )}
        </motion.g>
      ))}
    </svg>
  )
}

export default function SpontaiPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* nav */}
      <div className="max-w-5xl mx-auto px-6 pt-10 pb-6">
        <Link
          href="/projects"
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
        >
          ← All Projects
        </Link>
      </div>

      {/* header */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="flex items-center gap-3 mb-4">
            <MapPin size={22} weight="duotone" className="text-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              Mobile · AI · Travel
            </span>
          </div>

          <div className="mt-0 flex items-start gap-6">
            <div className="flex-1">
              <h1 className="text-display-xl font-display font-bold text-foreground leading-none tracking-tight">
                Spontai
              </h1>
              <p className="mt-4 text-base text-muted-foreground max-w-lg leading-relaxed">
                An AI travel planning app that turns a destination and a date range
                into a personalised itinerary. Built solo as founding engineer, now
                live on the App Store in the UK and US.
              </p>
            </div>

            {/* animated route — the signature motif */}
            <div className="hidden sm:block flex-shrink-0 opacity-80">
              <RouteMap />
            </div>
          </div>

          {/* metadata bar */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 border-t border-border pt-6 gap-6">
            {DETAILS.map(({ tag, value }) => (
              <div key={tag}>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground block">
                  {tag}
                </span>
                <span className="font-mono text-sm text-foreground mt-1 block">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* problem / role / outcome */}
      <motion.section
        className="max-w-5xl mx-auto px-6 mb-2"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
      >
        <div className="border-t border-border pt-8 mb-8 flex items-center gap-4">
          <div className="relative h-9 w-9 flex-shrink-0 border border-border bg-card">
            <Image
              src="/images/icon/spontai-logo-portfolio.png"
              alt="Spontai"
              fill
              className="object-contain p-1.5"
            />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Problem → Role → Outcome
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border">
          {[
            {
              tag: 'Problem',
              body: 'Planning a trip means a dozen open tabs, a group chat nobody reads back, and a spreadsheet that goes stale the moment plans change.',
            },
            {
              tag: 'Role',
              body: 'Co-founder & CTO. I own the product, the AI pipeline, and the infrastructure — from the first prototype to what ships in production today.',
            },
            {
              tag: 'Outcome',
              body: 'Live on the App Store in the UK and US, with fortnightly releases shaped directly by 50+ TestFlight feedback items per cycle.',
            },
          ].map(({ tag, body }) => (
            <div key={tag} className="bg-background p-6">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary block mb-2">
                {tag}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* metrics */}
      <motion.section
        className="max-w-5xl mx-auto px-6 mt-16"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
      >
        <div className="border-t border-border pt-8 mb-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            In Production
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border">
          {METRICS.map(({ value, label }) => (
            <div key={label} className="bg-background p-6">
              <p className="font-display text-3xl font-bold tabular-nums tracking-tight text-primary">
                {value}
              </p>
              <p className="mt-2 text-xs text-muted-foreground leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* tech stack grid */}
      <motion.section
        className="max-w-5xl mx-auto px-6 mt-16"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
      >
        <div className="border-t border-border pt-8 mb-8 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Technical Stack
          </span>
          <RouteMap className="w-8 h-8 opacity-50" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-border">
          {STACK.map(({ label, value }) => (
            <div key={label} className="bg-background p-5">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground block mb-1">
                {label}
              </span>
              <span className="font-display text-base font-semibold text-foreground">
                {value}
              </span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* what I built */}
      <motion.section
        className="max-w-5xl mx-auto px-6 mt-16"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
      >
        <div className="border-t border-border pt-8 mb-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            What I Built
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl">
          {BUILT.map(({ title, body }) => (
            <div key={title}>
              <h3 className="font-display font-bold text-foreground text-lg mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CTA footer */}
      <motion.section
        className="max-w-5xl mx-auto px-6 mt-20 pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
      >
        <div className="border-t border-border pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
              Live Product
            </p>
            <p className="text-sm text-muted-foreground">
              Available now on the UK and US App Store
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-accent"
            >
              Get it on the App Store ↗
            </a>
            <Link href="/projects" className="btn-ghost">
              ← Projects
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  )
}
