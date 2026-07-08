import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { CURRICULUM, SITE_CONFIG } from '@/lib/constants'

export function Curriculum() {
  return (
    <section
      id="curriculum"
      className="py-24 sm:py-32 bg-background"
    >
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-gold text-[10px] tracking-[6px] uppercase font-semibold mb-6 text-center">
            תוכנית הלימודים
          </p>
          <h2
            className="font-display font-light text-text-primary text-center leading-[1.15] mb-4"
            style={{ fontSize: 'clamp(28px, 5vw, 52px)' }}
          >
            מה תלמדו
            <br />
            <em className="text-gold-light not-italic font-light italic">בקורס</em>
          </h2>
          <div className="flex justify-center gap-6 mt-6 mb-16">
            {[
              { value: '8', label: 'מפגשים פרונטליים' },
              { value: '40', label: 'שעות אקדמיות' },
            ].map((s) => (
              <div key={s.label} className="text-center border-2 border-border px-6 py-3">
                <div className="font-display font-light text-gold text-2xl" style={{ letterSpacing: '2px' }}>
                  {s.value}
                </div>
                <div className="text-text-muted text-[10px] tracking-[2px] uppercase mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {CURRICULUM.map((session, i) => (
            <AnimatedSection key={session.session} delay={0.06 * i} direction="up">
              <div className="group border-2 border-border hover:border-gold hover:shadow-lg hover:scale-105 p-6 transition-all duration-300 relative overflow-hidden h-full">
                <span
                  className="absolute -bottom-3 -start-1 font-display font-light text-gold/5 leading-none select-none pointer-events-none group-hover:text-gold/8 transition-colors"
                  style={{ fontSize: '80px' }}
                  aria-hidden="true"
                >
                  {session.session}
                </span>
                <p className="text-gold text-[9px] tracking-[3px] uppercase mb-3 font-semibold">
                  מפגש {session.session}
                </p>
                <h3 className="text-text-primary text-sm font-semibold leading-snug mb-1">
                  {session.title}
                </h3>
                {session.subtitle && (
                  <p className="text-text-muted text-xs leading-relaxed">{session.subtitle}</p>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.4}>
          <div className="text-center mt-14">
            <a
              href={SITE_CONFIG.whatsappCoursesLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold hover:bg-gold-light text-background font-bold px-12 py-4 text-[10px] tracking-[3px] uppercase transition-all duration-200 hover:scale-105"
            >
              הרשמה למחזור הקרוב ←
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
