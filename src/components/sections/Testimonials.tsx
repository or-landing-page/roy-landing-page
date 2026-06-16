import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { TESTIMONIALS } from '@/lib/constants'

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <SectionTitle
            eyebrow="מה אומרים עלינו"
            title="הלקוחות"
            titleHighlight="מדברים"
            centered
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <AnimatedSection key={t.id} delay={i * 0.1}>
              <div className="h-full bg-background rounded-2xl border border-border hover:border-gold/20 p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gold/5">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4" aria-label={`דירוג: ${t.rating} מתוך 5`}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <span key={s} className="text-gold text-sm" aria-hidden="true">
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-text-muted text-sm leading-relaxed flex-1 mb-5">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-surface-2 border border-border flex items-center justify-center text-lg flex-shrink-0">
                    {t.emoji}
                  </div>
                  <div>
                    <p className="text-text-primary font-bold text-sm">{t.name}</p>
                    <p className="text-text-muted text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
