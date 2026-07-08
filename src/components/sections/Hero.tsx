'use client'

import { Button } from '@/components/ui/Button'
import { SITE_CONFIG, NEXT_COHORT } from '@/lib/constants'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-surface to-background pt-20 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background opacity-50" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Preheader */}
        <div className="mb-6 inline-block">
          <p className="text-text-muted text-sm md:text-base font-medium tracking-widest">
            קורס מקצועי בברברינג
          </p>
        </div>

        {/* Main heading */}
        <h1 className="font-display text-5xl md:text-7xl font-light mb-6 text-text-primary leading-tight">
          משראש ליד
          <span className="block text-gold font-light">השיטה של רוי</span>
        </h1>

        {/* Subheading */}
        <p className="text-text-muted text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          למדו את הגיאומטריה, האנטומיה, וסגנון אישי. הפכו לברברים שמתמחרים נכון ובונים לקוחות שחוזרים.
        </p>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="#curriculum">
            <Button size="lg" variant="primary">
              הרשמה עכשיו — {NEXT_COHORT.spotsTotal - NEXT_COHORT.spotsTaken} מקומות בלבד ⚡
            </Button>
          </Link>
          <Link href="#method">
            <Button size="lg" variant="outline">
              למד עוד על השיטה
            </Button>
          </Link>
        </div>

        {/* Trust signal */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 text-text-muted text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gold font-bold">✓</span>
            <span>{SITE_CONFIG.studentsCount}+ ברברים הכפילו את המחיר</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gold font-bold">✓</span>
            <span>8 שבועות קורס אינטנסיבי</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gold font-bold">✓</span>
            <span>200+ שעות עבודה בשדה</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
