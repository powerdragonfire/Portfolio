import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/private/'],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'Google-Extended',
          'ClaudeBot',
          'Claude-Web',
          'anthropic-ai',
          'PerplexityBot',
          'Applebot-Extended',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://mihirgandecha.com/sitemap.xml',
  }
}
