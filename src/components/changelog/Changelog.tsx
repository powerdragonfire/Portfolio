import { Card } from '@/components/shared/Card'
import { useId } from 'react'
import { type ChangelogItemType, type Promotion, changelogList } from '@/config/infoConfig'

function PromotionChain({ promotions }: { promotions: Promotion[] }) {
  return (
    <div className="mt-4 mb-1 flex flex-wrap items-center gap-y-2">
      {promotions.map((p, i) => {
        const isLast = i === promotions.length - 1
        return (
          <span key={p.title} className="flex items-center gap-1.5">
            <span
              className={[
                'font-mono text-[10px] uppercase tracking-[0.15em] px-2 py-0.5 border',
                isLast
                  ? 'border-primary text-primary bg-primary/5'
                  : 'border-border text-muted-foreground',
              ].join(' ')}
            >
              {p.title}
            </span>
            {!isLast && (
              <span className="font-mono text-[10px] text-muted-foreground/40 select-none">→</span>
            )}
          </span>
        )
      })}
    </div>
  )
}

function ChangelogSection({
  date,
  children,
}: {
  date: string
  children: React.ReactNode
}) {
  const id = useId()

  return (
    <section
      aria-labelledby={id}
      className="md:border-l md:border-border md:pl-6"
    >
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        <h2
          id={id}
          className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground"
        >
          {date}
        </h2>
        <div className="md:col-span-3">{children}</div>
      </div>
    </section>
  )
}

function ChangelogItem({
  title,
  description,
  bullets,
  promotions,
}: {
  title: string
  description: string
  bullets?: string[]
  promotions?: Promotion[]
}) {
  return (
    <Card as="li">
      <Card.Title as="h3">{title}</Card.Title>

      {promotions && promotions.length > 0 && (
        <PromotionChain promotions={promotions} />
      )}

      <Card.Description>{description}</Card.Description>

      {bullets && bullets.length > 0 && (
        <ul className="relative z-10 mt-3 space-y-2">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-muted-foreground">
              <span className="mt-[5px] flex-shrink-0 w-1 h-1 rounded-full bg-primary" aria-hidden />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  )
}

export default function ChangelogBlock() {
  return (
    <>
      {changelogList.map((item: ChangelogItemType, index) => (
        <ChangelogSection date={item.date} key={index}>
          {item.content.map((content, index2) => (
            <ChangelogItem
              key={index2}
              title={content.title}
              description={content.description}
              bullets={content.bullets}
              promotions={content.promotions}
            />
          ))}
        </ChangelogSection>
      ))}
    </>
  )
}
