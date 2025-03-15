// changelog
export const changelogHeadLine = "What's new about this site"
export const changelogIntro = 'Check out the latest changes to this site.'

// changelog
export type ChangelogItemType = {
  date: string
  content: [
    {
      title: string
      description: string
    },
  ]
}

export const changelogList: Array<ChangelogItemType> = [
  {
    date: 'June 2022 - Sept 2022',
    content: [
      {
        title: '♻️ Green Sustainable Delivery Roadmap: M&S Summer Internship',
        description:
          "Received a return offer to join the Technology Graduate Scheme after connecting with Software Engineers, tailoring my Green Consulting Project into a UX Website implementation. Unfortunately, this was changed to a Corporate Graduate offer, due to the removal of the Tech Grad scheme. I took a risk in refusing this offer and following my passion, starting an MSc Computer Science master's conversion at Bristol University.",
      },
    ],
  },
  {
    date: 'Sept 2022 - June 2023',
    content: [
      {
        title: '🔍 Embracing My Superpower',
        description:
          'I redefined ADHD as a strength. Hyper-focus became my ally, powering my problem-solving skills and igniting creative breakthroughs in tech and process automation."',
      },
    ],
  },
  {
    date: 'Jan 2023 - Sept 2023',
    content: [
      {
        title:
          '🏚️ Leading Talent Aquisition and Management at Project Destined',
        description:
          'Driving change with over 2,500 student recruits, I championed digital transformations—automating workflows, enhancing marketing strategies, and crafting interactive dashboards.',
      },
    ],
  },
  {
    date: 'Sept 2024 - Sept 2025',
    content: [
      {
        title: '🧑‍🎓 MSc Computer Science at Bristol University',
        description:
          'Probably one of the hardest things I have ever done. Completed a Masters, packing all programming modules taught in a 3-year undergraduate in one year. Very intense, but covered everything from Hack Assembly, C, Java, to leading a Mobile Fintech project for my Dissertation. Pleased to say that I have graduated too!',
      },
    ],
  },
  {
    date: 'Sept 2025 - Present',
    content: [
      {
        title: '💼 InvesTech Associate at Project Destined (Junior SWE)',
        description: 'Trying to get 1% better every day at Full-Stack SWE.',
      },
    ],
  },
]
