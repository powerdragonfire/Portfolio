// education
export type EducationItemType = {
  school: string
  major: string
  image?: string
  logo: string
  start: string
  end: string
}

export const educationList: Array<EducationItemType> = [
  {
    school: 'Bristol University',
    major: 'MSc Computer Science',
    logo: 'college',
    start: '2023',
    end: '2024',
  },
  {
    school: 'Warwick University',
    major: 'BA (Hons) Liberal Arts',
    logo: 'college',
    start: '2020',
    end: '2023',
  },
]
