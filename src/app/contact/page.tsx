import { type Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import ContactSection from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Mihir Gandecha — open to founding engineer, full-stack, and mobile roles at UK AI-native and fintech companies.',
}

export default function Contact() {
  return (
    <Container className="mt-16 sm:mt-24">
      <ContactSection />
    </Container>
  )
}
