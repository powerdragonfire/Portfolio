'use client'
import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  PopoverBackdrop,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import clsx from 'clsx'
import { useTheme } from 'next-themes'

import { Container } from '@/components/layout/Container'
import { navItems } from '@/config/siteConfig'
import { XIcon, SunIcon, MoonIcon } from 'lucide-react'

function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="w-8 h-8" aria-hidden="true" />

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'dark'
        ? <SunIcon className="h-4 w-4" />
        : <MoonIcon className="h-4 w-4" />}
    </button>
  )
}

function MobileNavItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <PopoverButton as={Link} href={href} className="block py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:text-primary transition-colors">
        {children}
      </PopoverButton>
    </li>
  )
}

function MobileNavigation(props: React.ComponentPropsWithoutRef<typeof Popover>) {
  return (
    <Popover {...props}>
      <PopoverButton className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors px-3 py-2 border border-border">
        Menu
      </PopoverButton>
      <Transition>
        <TransitionChild
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <PopoverBackdrop className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm" />
        </TransitionChild>
        <TransitionChild
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-2"
        >
          <PopoverPanel
            focus
            className="fixed inset-x-0 top-0 z-50 bg-card border-b border-border p-6"
          >
            <div className="flex items-center justify-between mb-8">
              <Link href="/">
                <Image
                  src="/images/mihir.jpg"
                  alt="Mihir Gandecha"
                  width={32}
                  height={32}
                  className="rounded-full object-cover object-top ring-1 ring-border"
                />
              </Link>
              <PopoverButton aria-label="Close menu">
                <XIcon className="h-5 w-5 text-muted-foreground" />
              </PopoverButton>
            </div>
            <nav>
              <ul className="divide-y divide-border">
                {navItems.map((item) => (
                  <MobileNavItem key={item.name} href={item.href}>{item.name}</MobileNavItem>
                ))}
              </ul>
            </nav>
          </PopoverPanel>
        </TransitionChild>
      </Transition>
    </Popover>
  )
}

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  const isActive = usePathname() === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-4 py-2 font-mono text-[11px] uppercase tracking-widest transition-colors',
          isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-0 bottom-0 h-px bg-primary" />
        )}
      </Link>
    </li>
  )
}

function DesktopNavigation(props: React.ComponentPropsWithoutRef<'nav'>) {
  return (
    <nav {...props}>
      <ul className="flex items-center">
        {navItems.map((item) => (
          <NavItem key={item.name} href={item.href}>{item.name}</NavItem>
        ))}
      </ul>
    </nav>
  )
}

export function Header() {
  const isHomePage = usePathname() === '/'

  return (
    <header className="pointer-events-none relative z-50 flex flex-none flex-col">
      <div className="top-0 z-10 h-14 pt-0 sticky">
        <div className="h-14 border-b border-border bg-background/90 backdrop-blur-sm">
          <Container className="h-full">
            <div className="flex h-full items-center justify-between gap-4">
              {/* Avatar */}
              <div className="pointer-events-auto flex-none">
                <Link href="/" aria-label="Home">
                  <Image
                    src="/images/mihir.jpg"
                    alt="Mihir Gandecha"
                    width={36}
                    height={36}
                    className="rounded-full object-cover object-top ring-1 ring-border hover:ring-primary transition-all duration-200"
                    priority
                  />
                </Link>
              </div>

              {/* Desktop nav + toggle */}
              <div className="pointer-events-auto hidden md:flex md:items-center md:gap-1">
                <DesktopNavigation />
                <ThemeToggle />
              </div>

              {/* Mobile: toggle + menu */}
              <div className="pointer-events-auto md:hidden flex items-center gap-2">
                <ThemeToggle />
                <MobileNavigation />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </header>
  )
}
