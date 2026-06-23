import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mihirgandecha.com/',
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://mihirgandecha.com/about',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mihirgandecha.com/projects',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://mihirgandecha.com/projects/spontai',
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://mihirgandecha.com/changelog',
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ]
}
