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
        title: '💼 InvesTech Associate at Wellington Management (Platform Engineer)',
        description: 'Full-stack platform engineer improving enterprise desktop applications serving 2,000+ global users. Trying to get 1% better every day.',
      },
    ],
  },
]
