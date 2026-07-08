import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { NEXT_COHORT, SITE_CONFIG } from '@/lib/constants'

export function CTABanner() {
  return (
    <section
      className="py-24 sm:py-32 bg-surface relative overflow-hidden text-center"
      style={{
        background:
          'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(184,150,62,0.1) 0%, transparent 60%), var(--color-surface)',
        borderTop: '1px solid rgba(184,150,62,0.15)',
      }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-gold text-[10px] tracking-[6px] uppercase font-semibold mb-8">
            הצטרפות
          </p>

          <h2
            className="font-display font-light text-text-primary leading-[1.15] mb-6"
            style={{ fontSize: 'clamp(32px, 6vw, 64px)' }}
          >
            {NEXT_COHORT.label}
            <br />
            <em className="text-gold-light not-italic font-light italic">נפתח בקרוב</em>
          </h2>

          <p className="text-text-muted text-sm font-light max-w-md mx-auto mb-10 leading-relaxed">
            מספר המקומות מוגבל כדי לאפשר ליווי אישי לכל תלמיד.
            נשארו {NEXT_COHORT.spotsTotal - NEXT_COHORT.spotsTaken} מקומות בלבד.
          </p>

          {/* Primary CTA */}
          <a
            href={SITE_CONFIG.whatsappCoursesLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold hover:bg-gold-light text-background font-bold px-12 py-5 text-[11px] tracking-[3px] uppercase transition-all duration-200 hover:scale-105 mb-4"
            style={{ boxShadow: '0 20px 60px rgba(184,150,62,0.25)' }}
          >
            להרשמה ופרטים נוספים ←
          </a>

          {/* Risk reversal */}
          <div className="border-2 border-border px-6 py-4 max-w-sm mx-auto mt-8">
            <p className="text-text-muted text-[10px] tracking-[1px] leading-relaxed">
              לא מרוצה מהמפגש הראשון?{' '}
              <span className="text-text-primary font-semibold">החזר כספי מלא — ללא שאלות.</span>
            </p>
          </div>

          <p className="text-text-muted text-[10px] tracking-[2px] uppercase mt-8">
            מקומות מוגבלים · ROYCE HOUSE ACADEMY © {new Date().getFullYear()}
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
