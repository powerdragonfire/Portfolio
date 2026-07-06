'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { appStoreUrl, cvUrl } from '@/config/infoConfig'

const STAGGER = 0.12
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: STAGGER } },
}

const slideUp = {
  hidden: { y: '105%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.7, ease: EASE },
  },
}

const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: EASE },
  },
}

const lineGrow = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.7, ease: EASE, delay: 0.1 },
  },
}

export function HeroSection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-end pb-12 pt-28 sm:pt-36 min-h-[90vh]"
    >
      {/* Name block */}
      <div className="overflow-hidden">
        <motion.h1
          variants={slideUp}
          className="text-display-hero font-display font-extrabold text-foreground uppercase leading-none tracking-tighter select-none"
        >
          Mihir
        </motion.h1>
      </div>
      <div className="overflow-hidden">
        <motion.span
          variants={slideUp}
          className="text-display-hero-sub font-display font-extrabold text-foreground uppercase leading-none tracking-tighter select-none ml-[2vw]"
        >
          Gandecha
        </motion.span>
      </div>

      {/* Accent line */}
      <motion.div
        variants={lineGrow}
        className="mt-6 h-px w-full bg-primary"
        aria-hidden="true"
      />

      {/* Descriptor */}
      <motion.div variants={fadeUp} className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="font-mono text-xs uppercase tracking-widest text-primary">
          Contract Software Engineer · Co-Founder CTO
        </span>
        <span className="text-muted-foreground font-mono text-xs" aria-hidden="true">·</span>
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          London · Open to Contract Work
        </span>
      </motion.div>

      {/* CTAs */}
      <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
        <Link href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost-accent">
          View Spontai ↗
        </Link>
        <Link href={cvUrl} download="Mihir Gandecha CV.pdf" className="btn-ghost">
          Download CV
        </Link>
      </motion.div>
    </motion.div>
  )
}
