'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { FAQ_ITEMS } from '@/lib/constants'
import { cn } from '@/lib/utils'

type FilterType = 'all' | 'service' | 'course'

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const [filter, setFilter] = useState<FilterType>('all')

  const filters: { label: string; value: FilterType }[] = [
    { label: 'הכל', value: 'all' },
    { label: 'שירותים', value: 'service' },
    { label: 'קורסים', value: 'course' },
  ]

  const filtered = FAQ_ITEMS.filter((item) => filter === 'all' || item.category === filter)

  return (
    <section id="faq" className="py-20 sm:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <SectionTitle
            eyebrow="שאלות נפוצות"
            title="יש"
            titleHighlight="שאלות?"
            subtitle="כנראה עניתי כבר. אבל תמיד אפשר לכתוב לי ישירות."
            centered
          />
        </AnimatedSection>

        {/* Filter tabs */}
        <AnimatedSection delay={0.1} className="flex justify-center gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => {
                setFilter(f.value)
                setOpen(null)
              }}
              className={cn(
                'px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200',
                filter === f.value
                  ? 'bg-gold text-background'
                  : 'border border-border text-text-muted hover:border-gold/40 hover:text-text-primary'
              )}
            >
              {f.label}
            </button>
          ))}
        </AnimatedSection>

        {/* Accordion */}
        <div className="flex flex-col gap-2">
          {filtered.map((item, i) => (
            <AnimatedSection key={item.id} delay={i * 0.05}>
              <div
                className={cn(
                  'border rounded-xl overflow-hidden transition-colors duration-200',
                  open === item.id ? 'border-gold/40 bg-surface' : 'border-border bg-surface'
                )}
              >
                <button
                  className="w-full text-end flex items-center justify-between gap-4 px-6 py-4 text-text-primary font-semibold text-sm hover:text-gold transition-colors"
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
