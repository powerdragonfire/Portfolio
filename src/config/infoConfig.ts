export * from './projects'
export * from './changelog'
export * from './education'
export * from './career'

// personal info
export const name = 'Mihir'
export const headline = 'Contract Software Engineer & Co-Founder CTO, London'
export const introduction =
  'Available for contract engineering work in London. Building Spontai — a live AI travel app on the App Store — and shipping AI-native mobile and fintech products.'
export const email = 'mihirgandecha@outlook.com'
export const githubUsername = 'powerdragonfire'

// hero CTAs
export const appStoreUrl = 'https://apps.apple.com/us/app/spontai/id6755359443'
export const cvUrl = '/cv.pdf'

// about page
export const aboutMeHeadline =
  'Contract Software Engineer & Co-Founder CTO, based in London'
export const aboutParagraphs = [
  'I’m a Full-Stack Engineer based in London, available for contract and freelance engineering work. I built Spontai — an AI travel planning iOS app — from scratch and shipped it to the UK and US App Store. At the same time, I am a Platform Engineer at Wellington Management building enterprise applications for 300+ developers, and a Mobile Engineer at Mynt Finance, a Kenyan neobank.',
  'I studied Liberal Arts at Warwick and converted to an MSc Computer Science at Bristol — which means I bring both a systems-thinking lens and a humanities instinct to everything I build.',
  'Outside of code I raised £71,000 for Dig Deep by climbing Kilimanjaro, and I’m currently obsessed with Japan trip planning (which is how Spontai started).',
]

export type AboutStatType = {
  value: string
  label: string
  href?: string
  hrefLabel?: string
}

export const aboutStats: Array<AboutStatType> = [
  {
    value: '£71k raised',
    label: 'Kilimanjaro charity climb',
    href: 'https://dig-deep.enthuse.com/pf/warwick',
    hrefLabel: 'Team Leader · Dig Deep',
  },
  {
    value: '2 countries',
    label: 'Spontai live on the App Store: UK + US',
    href: 'https://spontai-app.com/',
    hrefLabel: 'spontai-app.com',
  },
  {
    value: '4 yrs',
    label: 'Industry experience · 3 in software engineering',
    href: 'https://www.linkedin.com/in/mihirgandecha/',
    hrefLabel: 'View on LinkedIn',
  },
]

export type SkillGroupType = {
  category: string
  skills: Array<string>
}

export const skillStack: Array<SkillGroupType> = [
  { category: 'Mobile', skills: ['React Native', 'Expo', 'TypeScript'] },
  { category: 'Backend', skills: ['Node.js', 'Express / Axios', 'MongoDB'] },
  {
    category: 'AI',
    skills: ['Claude API', 'Multi-agent pipelines', 'RAG', 'OpenTelemetry'],
  },
  { category: 'Cloud', skills: ['AWS'] },
]

// blog
export const blogHeadLine = 'Education'

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'GitHub',
    ariaLabel: 'GitHub profile',
    icon: 'github',
    href: 'https://github.com/powerdragonfire',
  },
  {
    name: 'LinkedIn',
    ariaLabel: 'LinkedIn profile',
    icon: 'linkedin',
    href: 'https://linkedin.com/in/mihirgandecha',
  },
  {
    name: 'App Store',
    ariaLabel: 'Spontai on the App Store',
    icon: 'app-store',
    href: 'https://apps.apple.com/us/app/spontai/id6755359443',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'lobsters',
  'maildotru',
]
