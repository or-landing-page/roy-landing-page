'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border'
          : 'bg-transparent border-b border-gold/10'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — Cormorant display font */}
        <a
          href="#"
          className="font-display font-light text-cream tracking-[6px] uppercase text-lg hover:text-gold transition-colors duration-200"
        >
          {SITE_CONFIG.name}
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-text-muted hover:text-cream text-[11px] font-semibold tracking-[3px] uppercase transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={SITE_CONFIG.whatsappCoursesLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex bg-gold hover:bg-gold-light text-background font-bold px-6 py-2.5 text-[10px] tracking-[2px] uppercase transition-all duration-200 hover:scale-105"
        >
          לקורס ←
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 text-cream"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'סגור תפריט' : 'פתח תפריט'}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-5 h-px bg-current transition-transform duration-200 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`}
          />
          <span
            className={`block w-5 h-px bg-current transition-opacity duration-200 ${mobileOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-px bg-current transition-transform duration-200 ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-surface border-b border-border overflow-hidden"
          >
            <ul className="px-6 py-6 flex flex-col gap-5" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-text-muted hover:text-cream text-[11px] font-semibold tracking-[3px] uppercase transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={SITE_CONFIG.whatsappCoursesLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gold text-background font-bold px-6 py-3 text-[10px] tracking-[2px] uppercase"
                >
                  לקורס ←
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
