import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { TESTIMONIALS } from '@/lib/constants'

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-gold text-[10px] tracking-[6px] uppercase font-semibold mb-6 text-center">
            המלצות
          </p>
          <h2
            className="font-display font-light text-text-primary text-center leading-[1.15] mb-4"
            style={{ fontSize: 'clamp(28px, 5vw, 52px)' }}
          >
            מה אומרים{' '}
            <em className="text-gold-light not-italic font-light italic">הבוגרים</em>
          </h2>
          <p className="text-text-muted text-sm text-center max-w-md mx-auto mb-16 font-light leading-relaxed">
            200+ ספרים עברו את הקורס. אלה חלק מהסיפורים שלהם.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <AnimatedSection key={t.id} delay={i * 0.1} direction="up">
              <div className="h-full bg-surface-2/50 border-2 border-border rounded-lg hover:border-gold hover:shadow-lg hover:scale-105 p-7 flex flex-col transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-5" aria-label={`דירוג: ${t.rating} מתוך 5`}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <span key={s} className="text-gold text-xs" aria-hidden="true">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote
                  className="font-display font-light italic text-text-primary/80 leading-relaxed flex-1 mb-6"
                  style={{ fontSize: '15px' }}
                >
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="border-t border-border pt-4 flex items-center gap-3">
                  {/* Initials avatar */}
                  <div
                    className="w-9 h-9 bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0"
                    aria-hidden="true"
                  >
                    <span className="text-gold font-semibold text-[11px] tracking-wide">
                      {getInitials(t.name)}
                    </span>
                  </div>
                  <div>
                    <p className="text-text-primary font-semibold text-xs tracking-wide">{t.name}</p>
                    <p className="text-text-muted text-[10px] tracking-[1px]">
                      {t.location} · בוגר קורס
                    </p>
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
