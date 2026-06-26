// changelog
export const changelogHeadLine = 'My Journey'
export const changelogIntro = 'Find out why I got into Full-Stack Development.'

export type Promotion = {
  title: string
  period?: string
}

export type ChangelogItemType = {
  date: string
  content: Array<{
    title: string
    description: string
    bullets?: string[]
    promotions?: Promotion[]
  }>
}

export const changelogList: Array<ChangelogItemType> = [
  {
    date: 'Oct 2025 - Present',
    content: [
      {
        title: '🚀 Spontai — Co-Founder CTO',
        description:
          'Built and shipped Spontai, an AI travel planning app designed to generate personalised itineraries from a user’s location, mood, preferences, and available time. I worked on it part-time as sole founder, owning the full product lifecycle from architecture and AI backend to App Store metadata, marketing, user feedback, and support.',
        bullets: [
          'Built the mobile app using React Native, Expo, TypeScript, Supabase, and EAS, shipping regular iOS and Android releases.',
          'Processed 50+ TestFlight feedback items into prioritised issues, using user feedback to drive fortnightly product iterations.',
          'Built a production RAG pipeline for personalised itinerary generation using OpenAI, pgvector semantic search, keyword search, community event scoring, and Google Places fallback.',
          'Managed Supabase infrastructure across 60+ database migrations and 20 edge functions, balancing performance, cost, and scalability.',
          'Used Claude Code with MCP integrations, Expo, Sentry, Figma, Context7, and custom CLAUDE.md rules to speed up development and create agentic workflows.',
          'Implemented monitoring with Sentry to track LLM usage, latency, cache hit rates, provider costs, structured logs, tracing, platform, device, and app version.',
        ],
        promotions: [{ title: 'Co-Founder CTO', period: 'Oct 2025' }],
      },
    ],
  },
  {
    date: 'Sept 2024 - Present',
    content: [
      {
        title: '💼 Wellington Management',
        description:
          'Started my first full-time software engineering role at Wellington Management, working on Mosaic: an internal platform used by 300+ global developers. This role marked my transition from Computer Science conversion graduate into a professional software engineer building production-grade tooling inside a global investment management firm.',
        bullets: [
          'Worked across React, TypeScript, AWS, Jenkins CI/CD, CloudWatch, Kibana, Sonar, Jest, Vitest, and React Testing Library.',
          'Supported scalable deployments and developer tooling across Mosaic, improving development-to-production workflows.',
          'Introduced improvements such as HTTP caching, hot module reloading, symbolic linking, Storybook, and Figma-driven UI workflows.',
          'Gained hands-on experience with production monitoring, infrastructure, code quality, testing, and platform engineering in a large-scale financial technology environment.',
        ],
        promotions: [
          { title: 'Technology Associate', period: 'Sept 2024' },
          { title: 'Core Software Engineer (Mid-tier)', period: 'Jun 2026' },
        ],
      },
    ],
  },
  {
    date: 'Sept 2023 - Sept 2024',
    content: [
      {
        title: '🎓 Career Switch: MSc Computer Science at Bristol University',
        description:
          'After studying Liberal Arts and building experience across consulting, operations, and start-up environments, I made the decision to formally switch into software engineering by completing an MSc Computer Science conversion at the University of Bristol.',
        bullets: [
          'Completed an intensive conversion MSc covering C, data structures and algorithms, computer architecture, Java, software engineering, and a client-facing summer project.',
          'Built the technical foundation needed to move from being interested in technology to developing real full-stack applications.',
          'Awarded a £5,000 MyWorld scholarship supporting postgraduate students in the creative technology industry.',
        ],
      },
    ],
  },
  {
    date: 'Jan 2023 – Sept 2023',
    content: [
      {
        title: 'Project Destined — Head of Global Talent',
        description:
          'Real estate training programme fostering financial literacy across Education, Recruitment, Investing, and Financial Services. Promoted from intern to the most senior non-American student globally following exceptional performance as the top student ambassador, recruiting 200+ UK and European students.',
        promotions: [
          { title: 'Intern', period: 'Jan 2023' },
          { title: 'London CBRE Lead', period: 'Feb 2023' },
          { title: 'EMEA Social Rep', period: 'Mar 2023' },
          { title: 'Global Top Ambassador', period: 'Apr 2023' },
          { title: 'Head of Talent Acquisition', period: 'May 2023' },
          { title: 'Head of Global Talent', period: 'Jun 2023' },
        ],
        bullets: [
          'Participated in evaluation of a live real estate deal — mixed-use development in London — alongside professionals from CBRE IM, Greystar, and Invesco.',
          'Prepared and presented an investment memo to senior real estate professionals; received 60+ hours of training in property valuation, deal financing, financial modelling, and market research.',
          'Built 10-year cash flow projections and sensitivity analysis (varying growth rates, hold periods, and exit cap rates) working directly with CBRE IM professionals.',
          'Pioneered operational processes on Monday.com — constructed and managed recruitment pipelines, cutting daily fault-management time by 3.5 hours through strategic automation.',
          'Orchestrated multi-channel marketing campaigns on Handshake and LinkedIn Recruiter, implementing Zapier automations that boosted candidate outreach and daily enquiries by 240%.',
          'Built an interactive recruitment dashboard delivering real-time metrics and facilitating data-driven decisions for the entire senior leadership team.',
        ],
      },
    ],
  },
  {
    date: 'June 2022 – Sept 2022',
    content: [
      {
        title: '♻️ Green Sustainable Delivery Roadmap: M&S Summer Internship',
        description:
          "Received a return offer to join the Technology Graduate Scheme after connecting with Software Engineers, tailoring my Green Consulting Project into a UX Website implementation. Unfortunately, this was changed to a Corporate Graduate offer, due to the removal of the Tech Grad scheme. I took a risk in refusing this offer and following my passion, starting an MSc Computer Science master's conversion at Bristol University.",
      },
    ],
  },
  {
    date: 'Sept 2022 – June 2023',
    content: [
      {
        title: '🔍 Embracing My Superpower',
        description:
          'I redefined ADHD as a strength. Hyper-focus became my ally, powering my problem-solving skills and igniting creative breakthroughs in tech and process automation.',
      },
    ],
  },
  {
    date: 'Sept 2023 – Sept 2024',
    content: [
      {
        title: '🧑‍🎓 MSc Computer Science at Bristol University',
        description:
          'Probably one of the hardest things I have ever done. Completed a Masters, packing all programming modules taught in a 3-year undergraduate in one year. Very intense, but covered everything from Hack Assembly, C, Java, to leading a Mobile Fintech project for my Dissertation. Pleased to say that I have graduated too!',
      },
    ],
  },
  {
    date: 'Sept 2024 – Present',
    content: [
      {
        title:
          '💼 InvesTech Associate at Wellington Management (Platform Engineer)',
        description:
          'Full-stack platform engineer improving enterprise desktop applications serving 2,000+ global users. Trying to get 1% better every day.',
      },
    ],
  },
]
