import { Check } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { COURSES, SITE_CONFIG } from '@/lib/constants'

export function Courses() {
  return (
    <section
      id="course"
      className="py-24 sm:py-32 relative overflow-hidden"
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
            הקורסים של{' '}
            <em className="text-gold-light not-italic font-light italic">RoyHouse</em>
          </h2>
          <p className="text-text-muted text-sm text-center max-w-lg mx-auto mb-10 leading-relaxed font-light">
            שיטת העבודה המלאה — מהחתך הראשון ועד ללקוח שחוזר ומביא חברים.
          </p>
        </AnimatedSection>

        {/* Scarcity bar */}
        <AnimatedSection delay={0.05}>
          <div className="mb-10 border border-gold/20 bg-gold/5 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-gold rounded-full animate-pulse flex-shrink-0" />
              <span className="text-cream text-xs font-semibold tracking-wide">
                קורס יולי 2025 — 7 מתוך 10 מקומות אויכסו
              </span>
            </div>
            <div className="w-full sm:w-48 h-1.5 bg-border flex-shrink-0">
              <div className="h-full bg-gold transition-all duration-1000" style={{ width: '70%' }} />
            </div>
          </div>
        </AnimatedSection>

        {/* Two courses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COURSES.map((course, i) => (
            <AnimatedSection key={course.id} delay={0.1 + i * 0.1}>
              <div
                className={`h-full border p-8 flex flex-col relative ${
                  course.popular
                    ? 'border-gold/50 bg-surface-2'
                    : 'border-border bg-surface-2/40'
                }`}
              >
                {course.popular && course.tag && (
                  <div className="absolute -top-px start-6">
                    <span className="bg-gold text-background text-[9px] font-bold tracking-[2px] uppercase px-3 py-1">
                      {course.tag}
                    </span>
                  </div>
                )}

                <div className={`mb-5 ${course.popular ? 'mt-4' : ''}`}>
                  <h3 className="font-display font-light text-cream text-xl mb-1">
                    {course.title}
                  </h3>
                  <p className="text-gold text-[10px] tracking-[3px] uppercase">{course.subtitle}</p>
                </div>

                <p className="text-text-muted text-sm leading-relaxed mb-6 font-light">
                  {course.description}
                </p>

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={13}
                        className="text-gold flex-shrink-0 mt-0.5"
                        strokeWidth={2.5}
                      />
                      <span className="text-text-muted text-xs leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Meta tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-[10px] text-text-muted border border-border px-2 py-1 tracking-[1px]">
                    {course.duration}
                  </span>
                  <span className="text-[10px] text-text-muted border border-border px-2 py-1 tracking-[1px]">
                    {course.modules} מודולים
                  </span>
                </div>

                {/* Price + CTA */}
                <div className="border-t border-border/60 pt-6">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span
                      className="font-display font-light text-gold"
                      style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
                    >
                      ₪{course.price}
                    </span>
                    {course.originalPrice && (
                      <span className="text-text-muted text-sm line-through">
                        ₪{course.originalPrice}
                      </span>
                    )}
                  </div>
                  <a
                    href={SITE_CONFIG.whatsappCoursesLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center font-bold px-6 py-3.5 text-[10px] tracking-[3px] uppercase transition-all duration-200 hover:scale-[1.02] ${
                      course.popular
                        ? 'bg-gold hover:bg-gold-light text-background'
                        : 'border border-gold/40 hover:border-gold text-cream hover:bg-gold/5'
                    }`}
                  >
                    הצטרף לקורס ←
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
