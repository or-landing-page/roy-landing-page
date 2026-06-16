import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { COURSE_FEATURES, SITE_CONFIG } from '@/lib/constants'

export function Courses() {
  return (
    <section
      id="course"
      className="py-24 sm:py-32 bg-surface relative overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, rgba(184,150,62,0.03) 0%, transparent 40%), #0f0f0f',
      }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-gold text-[10px] tracking-[6px] uppercase font-semibold mb-6 text-center">
            הפתרון
          </p>
          <h2
            className="font-display font-light text-cream text-center leading-[1.15] mb-4"
            style={{ fontSize: 'clamp(28px, 5vw, 52px)' }}
          >
            הקורס של{' '}
            <em className="text-gold-light not-italic font-light italic">RoyHouse</em>
          </h2>
          <p className="text-text-muted text-sm text-center max-w-lg mx-auto mb-16 leading-relaxed font-light">
            שיטת העבודה המלאה — מהחתך הראשון ועד ללקוח שחוזר ומביא חברים. לא תיאוריה. טכניקה
            אמיתית, בשטח.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="border border-gold/20 bg-surface-2/60 p-8 sm:p-12">
            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 mb-10">
              {COURSE_FEATURES.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 py-4 border-b border-border/60 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0"
                >
                  <span className="text-gold text-xs mt-0.5 flex-shrink-0">✦</span>
                  <p className="text-text-muted text-sm leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>

            {/* Price + CTA */}
            <div className="border-t border-gold/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-text-muted text-xs tracking-[2px] uppercase mb-1">מחיר הקורס</p>
                <div className="flex items-baseline gap-3">
                  <span
                    className="font-display font-light text-gold"
                    style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}
                  >
                    ₪2,990
                  </span>
                  <span className="text-text-muted text-sm line-through">₪4,500</span>
                  <span className="text-[10px] bg-gold/10 text-gold border border-gold/20 px-2 py-1 tracking-[1px]">
                    חסכון ₪1,510
                  </span>
                </div>
              </div>
              <a
                href={SITE_CONFIG.whatsappCoursesLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold hover:bg-gold-light text-background font-bold px-10 py-4 text-[10px] tracking-[3px] uppercase transition-all duration-200 hover:scale-105 w-full sm:w-auto text-center"
              >
                הצטרף לקורס ←
              </a>
            </div>

            {/* Trust signals */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center sm:justify-start">
              {['8 שבועות', '12 מודולים', 'ליווי 3 חודשים', 'תעודה מוכרת'].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] text-text-muted border border-border px-3 py-1.5 tracking-[1px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
