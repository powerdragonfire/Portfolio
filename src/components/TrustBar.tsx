
type Logo = {
  name: string
  /** Optional inline mark rendered before the label. */
  mark?: React.ReactNode
}

// Text fallbacks throughout — none of these brands ship a clean
// Simple Icons glyph, so the wordmark reads more honestly than an
// approximated logo. Only the App Store gets a real vector (Apple).
const logos: Logo[] = [
  { name: 'Wellington Management' },
  { name: 'Spontai Ai Mobile' },
  { name: 'Marks & Spencer' },
  { name: 'nuumi Mobile' },
  { name: 'Mynt Finance' },
  { name: 'University of Bristol' },
  { name: 'University of Warwick' },
  {
    name: 'App Store',
  },
]

export function TrustBar() {
  return (
    <section aria-label="Trusted by and built for" className="mt-2 mb-10">
      <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Trusted by &amp; built for
      </h2>

      <ul
        role="list"
        className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 lg:flex lg:flex-nowrap lg:items-center lg:justify-between lg:gap-x-5"
      >
        {logos.map((logo) => (
          <li key={logo.name} className="min-w-0">
            <span
              tabIndex={0}
              className="trust-logo flex items-center gap-1.5 text-xs font-medium tracking-tight text-foreground outline-none whitespace-nowrap"
            >
              {logo.mark}
              {logo.name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TrustBar
