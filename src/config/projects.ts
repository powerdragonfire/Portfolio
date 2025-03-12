// projects
export const projectHeadLine = 'Portfolio.'
export const projectIntro =
  "I've worked on a variety of projects, from cool art projects in C, building SQL from scratch with Java, and mostly specialising with Full-Stack Web and Mobile development."

export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  date?: string
  logo?: string
  category?: string[]
  tags?: string[]
  image?: string
  techStack?: string[]
  gitStars?: number
  gitForks?: number
}

// projects
export const projects: Array<ProjectItemType> = [
  {
    name: 'Nuumi',
    description:
      'A free workout tracker that turns your fitness goals into lasting habits. Plan, log, and share your workouts effortlessly while building a lasting routine.',
    link: { href: 'https://www.nuumi.co.uk/', label: 'Nuumi' },
    logo: '/images/icon/nuumi.png',
    category: ['Website', 'Fitness', 'Health'],
    techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
    tags: ['Workout', 'Fitness', 'Tracker'],
  },
  {
    name: 'Mynt Finance Mobile App',
    description: 'Neobank Fintech in Kenya.',
    link: {
      href: 'https://www.linkedin.com/posts/enock-onsare_introducing-mynt-neobank-a-fintech-startup-activity-7011339963984166912-ucL5/',
      label: 'Mynt Finance',
    },
    logo: '/images/icon/agrimarketplace_logo.jpeg',
    category: ['Mobile'],
    techStack: ['Expo', 'React Native', 'NodeJS', 'Express'],
    tags: ['Fintech', 'Mobile'],
  },
  {
    name: 'Stag Java Game',
    description: 'Simple Text Adventure Game (STAG)',
    link: {
      href: 'https://github.com/mihirgandecha/JAVA-CW-2023',
      label: 'Github',
    },
    logo: '/images/icon/stag.png',
    category: ['Game'],
    techStack: ['Java'],
    tags: ['Game Development'],
  },
  {
    name: 'MihirSQL',
    description: 'SQL from scratch using Java.',
    link: { href: 'mysql.com', label: 'SQL' },
    category: ['Database'],
    techStack: ['Java'],
    tags: ['Java', 'SQL'],
  },
]
