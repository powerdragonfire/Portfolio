export const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://mihirgandecha.com/#person',
      name: 'Mihir Gandecha',
      url: 'https://mihirgandecha.com',
      jobTitle: 'Contract Software Engineer & Co-Founder CTO',
      description:
        'Full-Stack, Mobile, and AI engineer based in London, available for contract engineering work. Creator of Spontai. Ex-Wellington Management, ex-Mynt Finance.',
      image: 'https://mihirgandecha.com/og-image.png',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'London',
        addressCountry: 'GB',
      },
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'University of Warwick' },
        { '@type': 'CollegeOrUniversity', name: 'University of Bristol' },
      ],
      sameAs: [
        'https://github.com/powerdragonfire',
        'https://linkedin.com/in/mihirgandecha',
      ],
      knowsAbout: [
        'React Native',
        'TypeScript',
        'Node.js',
        'AI Engineering',
        'Mobile Engineering',
        'Full-Stack Development',
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://mihirgandecha.com/#service',
      name: 'Contract Software Engineering — Mihir Gandecha',
      serviceType:
        'Contract Software Engineering, Mobile Engineering, AI Engineering',
      provider: { '@id': 'https://mihirgandecha.com/#person' },
      areaServed: [
        { '@type': 'City', name: 'London' },
        { '@type': 'Place', name: 'Remote' },
      ],
      description:
        'Contract and freelance full-stack, mobile, and AI engineering services for startups and businesses in London and remotely.',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://mihirgandecha.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does Mihir Gandecha take on contract or freelance work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Mihir is available for contract and freelance full-stack, mobile, and AI engineering work, in addition to founding engineer roles.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Mihir Gandecha based in London?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, Mihir is a software engineer based in London, UK, and is available for both local and remote engagements.',
          },
        },
        {
          '@type': 'Question',
          name: 'What technologies does Mihir Gandecha work with?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'React Native and Expo for mobile, Node.js and Express for backend, Claude API and multi-agent pipelines for AI, and AWS for cloud infrastructure.',
          },
        },
      ],
    },
  ],
}
