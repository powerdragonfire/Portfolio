export * from './projects'
export * from './changelog'
export * from './education'
export * from './career'

// personal info
export const name = 'Mihir'
export const headline = 'Full-Stack Developer'
export const introduction =
  'Building digital experiences that empower innovation.'
export const email = 'mihirgandecha@outlook.com'
export const githubUsername = 'mihirgandecha'

// about page
export const aboutMeHeadline = 'Junior SWE based in London'
export const aboutParagraphs = [
  'Hi, I’m Mihir Gandecha – a passionate full-stack developer dedicated to turning innovative ideas into robust, scalable digital solutions.',
  'I aim to be the best in building responsive web applications and dynamic software products, I thrive on blending creativity with cutting-edge technology to drive real business impact.',
  'My priority right now is honing my skills in both front-end and back-end development, leveraging modern frameworks and tools to craft user-centric experiences.',
  'Beyond coding, I actively contribute to the tech community through thought leadership and collaborative projects, continually learning and adapting in an ever-evolving industry.',
  'Let’s connect!',
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
