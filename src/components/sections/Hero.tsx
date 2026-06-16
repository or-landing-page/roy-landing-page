'use client'

import { motion } from 'framer-motion'
import { SITE_CONFIG } from '@/lib/constants'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,168,76,0.08)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(201,168,76,0.05)_0%,_transparent_50%)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.p
            className="text-gold text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            ספר מקצועי · תל אביב
          </motion.p>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-text-primary leading-[1.05] mb-6">
            אמנות
            <br />
            <span className="text-gold relative">
              הספרות
              <motion.span
                className="absolute -bottom-2 start-0 end-0 h-px bg-gold/30"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </span>
          </h1>

          <p className="text-text-muted text-base sm:text-xl max-w-2xl mx-auto mb-3 leading-relaxed">
            {SITE_CONFIG.yearsExperience}+ שנות ניסיון. סטנדרט של מצוינות.
          </p>
          <p className="text-text-muted text-base sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            כי כל גבר ראוי לנראות הטובה ביותר שלו.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex justify-center gap-10 sm:gap-16 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {[
            { value: `${SITE_CONFIG.yearsExperience}+`, label: 'שנות ניסיון' },
            { value: `${SITE_CONFIG.studentsCount}+`, label: 'סטודנטים בוגרים' },
            { value: `${SITE_CONFIG.clientsCount}+`, label: 'לקוחות מרוצים' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-black text-gold">{stat.value}</p>
              <p className="text-text-muted text-xs sm:text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href={SITE_CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-gold-light text-background font-black px-8 py-4 rounded-lg text-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-gold/20 w-full sm:w-auto"
          >
            קבע תור עכשיו →
          </a>
          <a
            href="#courses"
            className="border border-gold/40 hover:border-gold text-gold font-bold px-8 py-4 rounded-lg text-lg transition-all duration-200 hover:bg-gold/5 w-full sm:w-auto"
          >
            לקורסים המקצועיים
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 start-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        aria-hidden="true"
      >
        <p className="text-text-muted text-xs tracking-widest uppercase">גלול למטה</p>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-gold/50 to-transparent"
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}
