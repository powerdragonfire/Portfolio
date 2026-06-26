const items = [
  'Wellington Management',
  'Spontai AI',
  'Marks & Spencer',
  'Nuumi',
  'Mynt Finance',
  'University of Bristol',
  'University of Warwick',
  'Project Destined',
]

export function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden border-t border-b border-border py-3" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground whitespace-nowrap px-6">
              {item}
            </span>
            <span className="text-primary text-xs" aria-hidden="true">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
