'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { FAQ_ITEMS } from '@/lib/constants'

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 sm:py-28 bg-background scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <p className="text-gold text-[10px] tracking-[6px] uppercase font-semibold mb-6 text-center">
            שאלות נפוצות
          </p>
          <h2
            className="font-display font-light text-cream text-center leading-[1.15] mb-4"
            style={{ fontSize: 'clamp(28px, 5vw, 48px)' }}
          >
            יש{' '}
            <em className="text-gold-light not-italic font-light italic">שאלות?</em>
          </h2>
          <p className="text-text-muted text-sm text-center max-w-md mx-auto mb-14 leading-relaxed font-light">
            כנראה עניתי כבר. אבל תמיד אפשר לכתוב ישירות.
          </p>
        </AnimatedSection>

        <div className="flex flex-col gap-2">
          {FAQ_ITEMS.map((item, i) => (
            <AnimatedSection key={item.id} delay={i * 0.05}>
              <div
                className={`border overflow-hidden transition-colors duration-200 ${
                  open === item.id ? 'border-gold/40 bg-surface' : 'border-border bg-surface'
                }`}
              >
                <button
                  className="w-full text-end flex items-center justify-between gap-4 px-6 py-5 text-text-primary font-semibold text-sm hover:text-gold transition-colors"
                  onClick={() => setOpen(open === item.id ? null : item.id)}
                  aria-expanded={open === item.id}
                >
                  <span>{item.question}</span>
                  <motion.span
                    animate={{ rotate: open === item.id ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-gold text-xl flex-shrink-0"
                    aria-hidden="true"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {open === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <p className="px-6 pb-5 text-text-muted text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
