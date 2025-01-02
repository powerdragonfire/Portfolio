export * from './projects'
export * from './friends'
export * from './changelog'
export * from './education'
export * from './career'
export * from './activity'


// personal info
export const name = 'Mihir'
export const headline = 'Full-Stack Developer.'
export const introduction = 'Delivering state-of-the-art UX solutions, translating your painpoints into opportunities.'
export const email = 'mihirgandecha@outlook.com'
export const githubUsername = 'mihirgandecha'

// about page
export const aboutMeHeadline = "I'm Mihir, a software engineer based in London, UK."
export const aboutParagraphs = [
  "I love coding. I learned programming when I in college. I wrote my first program in Java when I was 18.",
  "I have a lot of hobbies, such as travelling, photography, watching movies, music and so on.",
  "I'm working as a software develop engineer in London now. And I'm building a lot of side projects in my spare time."
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro = "I've written something about AI, programming and life."


// social links
export type SocialLinkType = {
  name: string,
  ariaLabel?: string,
  icon: string,
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Ko-fi',
    icon: 'coffee',
    href: 'https://ko-fi.com/coreychiu'
  },
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/mihirgandecha'
  },
  {
    name: 'LinkedIn',
    icon: 'lobsters',
    href: 'http://linkedin.com/in/mihirgandecha'
  },
  {
    name: 'X',
    icon: 'x',
    href: 'https://x.com/realcoreychiu'
  },
  {
    name: 'Bsky',
    icon: 'bsky',
    href: 'https://bsky.app/profile/coreychiu.com'
  },
  {
    name: 'Jike',
    icon: 'pill',
    href: 'https://okjk.co/P7c1zU'
  },
  {
    name: 'Discord',
    icon: 'discord',
    href: 'https://discord.gg/xTxRg3Ej'
  },
]

// https://simpleicons.org/
export const techIcons = [
  "typescript",
  "javascript",
  "supabase",
  "cloudflare",
  "java",
  "oracle",
  "mysql",
  "react",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "postgresql",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "ios",
  "apple",
  "lobsters"
];



