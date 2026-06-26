'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/config/infoConfig'

// 8 projects: Spontai spans 2 rows in col 1. Cols 2-3 get 4 items, row 3 gets 3 items → perfect fill.
const featured = projects.slice(0, 8)

function BentoTile({
  project,
  large = false,
}: {
  project: typeof projects[0]
  large?: boolean
}) {
  const categoryColor = (cat: string) => {
    const map: Record<string, string> = {
      AI: 'text-primary',
      Mobile: 'text-primary',
      Enterprise: 'text-foreground/60',
      Fintech: 'text-primary',
    }
    return map[cat] ?? 'text-foreground/50'
  }

  const primaryCat = project.category?.[0] ?? ''

  const isInternal = project.link.href.startsWith('/')
  return (
    <Link
      href={project.link.href}
      {...(!isInternal && { target: '_blank', rel: 'noopener noreferrer' })}
      className="bento-tile group flex flex-col h-full"
    >
      <div className="flex flex-1 flex-col p-6 gap-4">
        {/* top row: logo + category */}
        <div className="flex items-start justify-between">
          {project.logo ? (
            <div className="h-8 max-w-[72px] flex items-center">
              <Image
                src={project.logo}
                alt={project.name}
                width={72}
                height={32}
                className="h-8 w-auto max-w-[72px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ) : (
            <div className="h-8 w-8 border border-border flex items-center justify-center">
              <span className="font-mono text-xs text-muted-foreground">
                {project.name.slice(0, 2).toUpperCase()}
              </span>
            </div>
          )}
          <span className={`font-mono text-[10px] uppercase tracking-widest ${categoryColor(primaryCat)}`}>
            {primaryCat}
          </span>
        </div>

        {/* name */}
        <div className="flex-1">
          <h3 className={`font-display font-bold text-foreground leading-tight tracking-tight group-hover:text-primary transition-colors duration-200 ${large ? 'text-3xl sm:text-4xl' : 'text-xl sm:text-2xl'}`}>
            {project.name}
          </h3>
          {large && (
            <p className="mt-3 text-sm text-muted-foreground line-clamp-3">
              {project.description}
            </p>
          )}
        </div>

        {/* tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack?.slice(0, large ? 5 : 3).map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] uppercase tracking-wider border border-border px-2 py-0.5 text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        {/* hover cta */}
        <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          View ↗
        </div>
      </div>
    </Link>
  )
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

export function ProjectsGrid() {
  return (
    <section className="mt-16">
      {/* Section header */}
      <div className="mb-8 border-t border-border pt-8 flex items-baseline justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Selected Work
        </span>
        <Link
          href="/projects"
          className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
        >
          All projects ↗
        </Link>
      </div>

      <h2 className="text-display-xl font-display font-bold text-foreground mb-10 leading-none tracking-tight">
        Portfolio.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {featured.map((project, i) => (
          <div
            key={project.name}
            className={i === 0 ? 'sm:row-span-2' : ''}
            style={{ minHeight: i === 0 ? 480 : 240 }}
          >
            <BentoTile project={project} large={i === 0} />
          </div>
        ))}
      </div>
    </section>
  )
}
