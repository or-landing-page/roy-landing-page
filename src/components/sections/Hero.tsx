'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SITE_CONFIG } from '@/lib/constants'

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-background">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&q=80"
          alt=""
          fill
          priority
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(8,8,8,0.55) 0%, rgba(8,8,8,0.35) 40%, rgba(8,8,8,0.85) 80%, #080808 100%)',
          }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(184,150,62,0.03) 60px),
            repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(184,150,62,0.03) 60px)
          `,
        }}
        aria-hidden="true"
      />

      {/* Gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(184,150,62,0.06) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 px-6 max-w-4xl mx-auto pb-24">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gold text-[10px] tracking-[8px] uppercase font-semibold mb-8"
        >
          ספרות יוקרה · קורס מקצועי
        </motion.p>

        {/* Logo / Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-light text-cream leading-[1.05] mb-6"
          style={{ fontSize: 'clamp(52px, 10vw, 110px)', letterSpacing: '12px' }}
        >
          RoyHouse
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center gap-4 justify-center mb-8 w-64 mx-auto"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="w-2 h-2 bg-gold rotate-45 flex-shrink-0" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.div>

        {/* Sub headline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-display font-light italic text-gold-light mb-10"
          style={{ fontSize: 'clamp(16px, 2.5vw, 24px)', letterSpacing: '4px' }}
        >
          האמנות שמגדירה אותך.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-text-muted text-sm font-light max-w-md mx-auto mb-12 leading-relaxed"
        >
          הקורס שיהפוך אותך מספר טוב — לספר שכולם מדברים עליו
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
        >
          <a
            href="#course"
            className="bg-gold hover:bg-gold-light text-background font-bold px-10 py-4 text-[10px] tracking-[3px] uppercase transition-all duration-200 hover:scale-105"
          >
            לקורס המלא ←
          </a>
          <a
            href="#about"
            className="border border-gold/40 hover:border-gold text-cream font-semibold px-10 py-4 text-[10px] tracking-[3px] uppercase transition-all duration-200 hover:bg-gold/5"
          >
            גלה עוד ↓
          </a>
        </motion.div>

        {/* Trust signals — above fold */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="flex flex-wrap justify-center gap-5 text-[10px] text-text-muted tracking-[2px] uppercase"
        >
          <span>★ 200+ בוגרים</span>
          <span className="text-gold/30">·</span>
          <span>{SITE_CONFIG.yearsExperience} שנות ניסיון</span>
          <span className="text-gold/30">·</span>
          <span>תעודה מוכרת</span>
          <span className="text-gold/30">·</span>
          <span>ליווי 3 חודשים</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-hidden="true"
      >
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-gold mx-auto" />
        <span className="text-text-muted text-[9px] tracking-[4px] uppercase">גלול</span>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute bottom-0 left-0 right-0 border-t border-border bg-surface/70 backdrop-blur-sm"
      >
        <div className="max-w-3xl mx-auto px-6 py-4 flex justify-center gap-12 sm:gap-20">
          {[
            { value: `${SITE_CONFIG.yearsExperience}+`, label: 'שנות ניסיון' },
            { value: `${SITE_CONFIG.studentsCount}+`, label: 'בוגרי קורסים' },
            { value: `${SITE_CONFIG.clientsCount.toLocaleString()}+`, label: 'לקוחות' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-display font-light text-gold text-xl"
                style={{ letterSpacing: '2px' }}
              >
                {stat.value}
              </div>
              <div className="text-text-muted text-[10px] tracking-[2px] uppercase mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
