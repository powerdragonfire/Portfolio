'use client'
import Link from 'next/link'
import clsx from 'clsx'
import { GitGraph } from 'lucide-react'
import { socialLinks } from '@/config/infoConfig'
import { LinkedinLogoIcon } from '@phosphor-icons/react'
import { Apple } from '@dev.icons/react'

const iconMap = {
  GitHub: GitGraph,
  LinkedIn: LinkedinLogoIcon,
  'App Store': Apple,
} as const

export function SocialLinksRow({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        'flex flex-wrap items-center justify-center gap-3',
        className,
      )}
    >
      {socialLinks.map((link) => {
        const Icon = iconMap[link.name as keyof typeof iconMap]

        return (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.ariaLabel ?? link.name}
            className="inline-flex items-center gap-2 rounded-full border border-muted bg-background/70 px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary/30 hover:text-primary"
          >
            <Icon className="h-4 w-4" />
            <span>{link.name}</span>
          </Link>
        )
      })}
    </div>
  )
}
