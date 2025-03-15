// career
export type CareerItemType = {
  company: string
  title: string
  image?: string
  logo: string
  start: string
  end: string
}

export const careerList: Array<CareerItemType> = [
  {
    company: 'Wellington Management',
    title: 'InvesTech Associate (SWE)',
    logo: 'bank',
    start: '2025',
    end: 'Present',
  },
  {
    company: 'Mynt Finance',
    title: 'Student Mobile Engineer',
    logo: 'mobile',
    start: 'June 2024',
    end: 'Sept 2024',
  },
  {
    company: 'Project Destined',
    title: 'Head of Talent Aquisition',
    logo: 'real estate',
    start: '2022',
    end: '2023',
  },
  {
    company: 'Marks and Spencer',
    title: 'Dotcom Summer Intern',
    logo: 'shop',
    start: 'June 2022',
    end: 'Sept 2022',
  },
]
