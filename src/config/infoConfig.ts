export * from './projects'
export * from './friends'
export * from './changelog'
export * from './education'
export * from './career'
export * from './activity'

// personal info
export const name = 'Mihir'
export const headline = 'Full-Stack Developer.'
export const introduction = 'learning'
export const email = 'mihirgandecha@outlook.com'
export const githubUsername = 'mihirgandecha'

// about page
export const aboutMeHeadline =
  "I'm Mihir, a software engineer based in London, UK."
export const aboutParagraphs = ['I hold a love-hate relationship with coding.']

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro = '....'

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Email',
    icon: 'email',
    href: 'mihirgandecha@outlook.com',
  },
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/mihirgandecha',
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
