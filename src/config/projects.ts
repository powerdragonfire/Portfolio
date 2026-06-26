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
    name: 'SmartKnob',
    description:
      'Assembled and flashed three SmartKnob View Base PCB v0.5 boards — a haptic-feedback rotary encoder driven by a BLDC motor under Field-Oriented Control. Tuned FOC parameters and haptic detent profiles in C++, configured the 8-LED ring for visual feedback, and flashed firmware via PlatformIO/ESP32.',
    link: { href: '/projects/smartknob', label: 'SmartKnob' },
    date: '2025',
    category: ['Hardware', 'Embedded'],
    techStack: ['C++', 'ESP32', 'PlatformIO', 'FOC', 'BLDC', 'LED'],
    tags: ['Hardware', 'Embedded', 'PCB', 'Haptics', 'Open Source'],
  },
  {
    name: 'Spontai',
    description:
      'AI-powered travel planning app (React Native/Expo) built as co-founder & CTO. Shipped fortnightly releases driven by 50+ TestFlight feedback items. Built production RAG pipeline with Claude & OpenAI for personalized itineraries. Managed Supabase infrastructure (60+ migrations, 20 edge functions), EAS builds, App Store deployment, and implemented Sentry monitoring for cost tracking across LLM providers.',
    link: { href: 'https://spontai-app.com/', label: 'Spontai' },
    date: 'Oct 2025 – Present',
    logo: '/images/icon/spontai-logo-portfolio.png',
    category: ['Mobile', 'AI', 'Travel'],
    techStack: [
      'React Native',
      'Expo',
      'TypeScript',
      'Supabase',
      'Claude AI',
      'OpenAI',
      'pgvector',
    ],
    tags: ['Travel', 'AI', 'RAG', 'Mobile', 'Founder', 'LLM', 'Production'],
  },
  {
    name: 'Wellington Management',
    description:
      'Full-stack platform engineer improving enterprise desktop application serving 2,000+ global users. Optimized frontend bundling and build tooling (Webpack to RsPack), reducing dev cycle times and implementing HTTP caching improvements. Enhanced testing infrastructure with Jest, RTL, and Storybook integration. Improved backend API performance and monitoring with enterprise-grade logging and alerting on AWS infrastructure.',
    link: {
      href: 'https://www.wellington.com/en',
      label: 'Wellington Management',
    },
    logo: '/images/icon/well-mgt.png',
    date: 'Sept 2024 – Present',
    category: ['Enterprise', 'Platform', 'Full-Stack'],
    techStack: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Jest',
      'AWS',
      'Jenkins',
    ],
    tags: ['Platform', 'Full-Stack', 'Enterprise', 'DevTools', 'Performance'],
  },
  {
    name: 'Blockbuster Retro',
    description:
      "Contract SEO work for blockbusterretro.com that improved the London ranking for 'pokemon' from 12 to 2.",
    link: {
      href: 'https://www.blockbusterretro.com/',
      label: 'Blockbuster Retro',
    },
    category: ['SEO', 'Contract', 'Ecommerce'],
    tags: ['SEO', 'Search Ranking', 'Contract Work', 'Ecommerce'],
  },
  {
    name: 'Marks and Spencer',
    description:
      'Led sustainability research project for carbon-free post-purchase experience, developing short/medium/long-term roadmap for green delivery options. Conducted customer experience research on sustainable nudges through competitor analysis and prototype testing. Learned web development fundamentals and built checkout page prototype demonstrating sustainable solution design for executive presentation.',
    link: {
      href: 'https://www.marksandspencer.com/',
      label: 'Marks and Spencer',
    },
    logo: '/images/icon/ms-logo.png',
    date: 'Jun 2022 – Sept 2022',
    category: ['Internship', 'Sustainability', 'UX Research'],
    techStack: ['HTML/CSS', 'JavaScript', 'Excel', 'UX Research'],
    tags: ['Sustainability', 'Customer Experience', 'Research', 'Internship'],
  },
  {
    name: 'Project Destined',
    description:
      'Talent acquisition and production operations manager. Pioneered operational processes by building interactive dashboards on Monday.com and automating pipelines, reducing daily fault management time by 3.5 hours. Orchestrated and optimized multifaceted recruitment marketing campaigns on Handshake and LinkedIn, implementing automation tools (Zapier) to boost outreach and daily inquiries by 240%.',
    link: { href: 'https://projectdestined.com/', label: 'Project Destined' },
    logo: '/images/icon/pd-logo.png',
    date: 'Jan 2023 – Jul 2023',
    category: ['Operations', 'Talent Acquisition', 'Marketing'],
    techStack: [
      'Monday.com',
      'Handshake',
      'LinkedIn Recruiter',
      'Zapier',
      'Excel',
    ],
    tags: [
      'Talent Acquisition',
      'Operations',
      'Marketing Automation',
      'Production',
    ],
  },
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
      href: 'https://github.com/powerdragonfire/JAVA-CW-2023',
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
