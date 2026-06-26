'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { Platformio } from '@dev.icons/react'

const STACK = [
  { label: 'Language', value: 'C++ / PlatformIO' },
  { label: 'MCU', value: 'ESP32-S3' },
  { label: 'Motor Driver', value: 'TMC6300 FOC' },
  { label: 'Display', value: 'Round LCD + LED Ring' },
  { label: 'Protocol', value: 'Serial / Wi-Fi OTA' },
  { label: 'PCB', value: 'SmartKnob View v0.5' },
]

const DETAILS = [
  { tag: 'YEAR', value: '2025' },
  { tag: 'TYPE', value: 'Hardware · Embedded' },
  { tag: 'ROLE', value: 'Builder · Firmware' },
  { tag: 'STATUS', value: 'Assembled & Flashed' },
]

// 8-LED ring — mirrors the physical PCB LED ring
function LedRing({ className = '' }: { className?: string }) {
  const count = 8
  const r = 48
  const cx = 64
  const cy = 64
  return (
    <svg
      width="128"
      height="128"
      viewBox="0 0 128 128"
      fill="none"
      className={className}
      aria-hidden
    >
      {Array.from({ length: count }).map((_, i) => {
        const angle = (i / count) * 2 * Math.PI - Math.PI / 2
        const x = cx + r * Math.cos(angle)
        const y = cy + r * Math.sin(angle)
        return (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r={5}
            fill="hsl(var(--foreground))"
            initial={{ opacity: 0.15 }}
            animate={{ opacity: [0.15, 1, 0.15] }}
            transition={{
              duration: 2.4,
              delay: (i / count) * 2.4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )
      })}
      {/* centre crosshair — PCB mounting reference */}
      <line x1="58" y1="64" x2="70" y2="64" stroke="hsl(var(--border))" strokeWidth="1" />
      <line x1="64" y1="58" x2="64" y2="70" stroke="hsl(var(--border))" strokeWidth="1" />
      <circle cx={cx} cy={cy} r="3" fill="hsl(var(--border))" />
    </svg>
  )
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function SmartKnobPage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)

  function toggleMute() {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setMuted(videoRef.current.muted)
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* nav */}
      <div className="max-w-5xl mx-auto px-6 pt-10 pb-6">
        <Link
          href="/projects"
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
        >
          ← All Projects
        </Link>
      </div>

      {/* header */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Platformio size={22} className="text-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              Hardware · Embedded Systems
            </span>
          </div>

          <div className="mt-0 flex items-start gap-6">
            <div className="flex-1">
              <h1 className="text-display-xl font-display font-bold text-foreground leading-none tracking-tight">
                SmartKnob
              </h1>
              <p className="mt-4 text-base text-muted-foreground max-w-lg leading-relaxed">
                Haptic-feedback rotary encoder built on an open-source PCB design.
                Three boards assembled and flashed — each driven by a BLDC motor
                under Field-Oriented Control to produce programmable detent sensations
                and visual feedback through a ring of eight LEDs.
              </p>
            </div>

            {/* animated LED ring — the signature motif */}
            <div className="hidden sm:block flex-shrink-0 opacity-80">
              <LedRing />
            </div>
          </div>

          {/* metadata bar */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 border-t border-border pt-6 gap-6">
            {DETAILS.map(({ tag, value }) => (
              <div key={tag}>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground block">
                  {tag}
                </span>
                <span className="font-mono text-sm text-foreground mt-1 block">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* video */}
      <motion.section
        className="max-w-5xl mx-auto px-6 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
      >
        <div className="relative bg-card border border-border overflow-hidden">
          <video
            ref={videoRef}
            src="/images/smartknob.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full aspect-video object-cover"
          />
          {/* mute toggle */}
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 border border-foreground/20 bg-background/70 backdrop-blur-sm text-foreground hover:border-primary hover:text-primary transition-colors"
          >
            {muted ? '⤷ Sound on' : '⤷ Mute'}
          </button>
        </div>
        <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
          Fig. 01 — SmartKnob View in operation
        </p>
      </motion.section>

      {/* PCB image */}
      <motion.section
        className="max-w-5xl mx-auto px-6 mt-10 mb-2"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
      >
        <div className="border border-border overflow-hidden bg-card">
          <Image
            src="/images/smartknob.jpg"
            alt="Three SmartKnob View Base PCB v0.5 boards — one illuminated with full LED ring"
            width={1200}
            height={900}
            className="w-full object-cover"
            priority
          />
        </div>
        <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
          Fig. 02 — SmartKnob View Base PCB v0.5 × 3 (one powered, LED ring active)
        </p>
      </motion.section>

      {/* tech stack grid */}
      <motion.section
        className="max-w-5xl mx-auto px-6 mt-16"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
      >
        <div className="border-t border-border pt-8 mb-8 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Technical Stack
          </span>
          <LedRing className="w-8 h-8 opacity-50" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-border">
          {STACK.map(({ label, value }) => (
            <div key={label} className="bg-background p-5">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground block mb-1">
                {label}
              </span>
              <span className="font-display text-base font-semibold text-foreground">
                {value}
              </span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* what I built */}
      <motion.section
        className="max-w-5xl mx-auto px-6 mt-16"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
      >
        <div className="border-t border-border pt-8 mb-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            What I Built
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl">
          {[
            {
              title: 'PCB Assembly',
              body: 'Soldered three SmartKnob View Base PCB v0.5 boards from components — TMC6300 motor driver IC, ESP32-S3 module, LED drivers, and the BLDC motor mount.',
            },
            {
              title: 'Firmware Flash',
              body: 'Built and uploaded the open-source PlatformIO firmware over USB. Configured FOC motor parameters and haptic detent profiles in C++.',
            },
            {
              title: 'Haptic Profiles',
              body: 'Tuned magnetic pole count and current limits to achieve clean detent clicks, free-spin, and damped modes — mapped to different knob "personalities".',
            },
            {
              title: 'LED Ring Control',
              body: 'Configured the eight-LED ring for position feedback and idle animations, matching the knob\'s current mode through colour and brightness.',
            },
          ].map(({ title, body }) => (
            <div key={title}>
              <h3 className="font-display font-bold text-foreground text-lg mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CTA footer */}
      <motion.section
        className="max-w-5xl mx-auto px-6 mt-20 pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
      >
        <div className="border-t border-border pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
              Open Source
            </p>
            <p className="text-sm text-muted-foreground">
              Based on the SmartKnob View by Scott Bezek
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a
              href="https://github.com/scottbez1/smartknob"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Source Repo ↗
            </a>
            <Link href="/projects" className="btn-ghost">
              ← Projects
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  )
}
