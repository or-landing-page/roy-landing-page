import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SITE_CONFIG } from '@/lib/constants'

export function CTABanner() {
  return (
    <section
      className="py-24 sm:py-32 bg-background relative overflow-hidden text-center"
      style={{
        background:
          'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(184,150,62,0.1) 0%, transparent 60%), #080808',
        borderTop: '1px solid rgba(184,150,62,0.15)',
      }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-gold text-[10px] tracking-[6px] uppercase font-semibold mb-8">
            מוכן להתחיל?
          </p>

          <h2
            className="font-display font-light text-cream leading-[1.15] mb-6"
            style={{ fontSize: 'clamp(32px, 6vw, 64px)' }}
          >
            מוכן להפוך
            <br />
            <em className="text-gold-light not-italic font-light italic">
              לספר שאנשים מחפשים?
            </em>
          </h2>

          <p className="text-text-muted text-sm font-light max-w-md mx-auto mb-10 leading-relaxed">
            נשארו 3 מקומות בלבד לקורס יולי 2025. אל תחכה.
          </p>

          {/* Primary CTA */}
          <a
            href={SITE_CONFIG.whatsappCoursesLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold hover:bg-gold-light text-background font-bold px-12 py-5 text-[11px] tracking-[3px] uppercase transition-all duration-200 hover:scale-105 mb-4"
            style={{ boxShadow: '0 20px 60px rgba(184,150,62,0.25)' }}
          >
            הצטרף לקורס עכשיו ←
          </a>

          {/* Secondary CTA — phone */}
          <div className="mb-8">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="text-text-muted hover:text-gold text-[10px] tracking-[3px] uppercase transition-colors duration-200"
            >
              או התקשר ישירות: {SITE_CONFIG.phone}
            </a>
          </div>

          {/* Risk reversal */}
          <div className="border border-border/50 px-6 py-4 max-w-sm mx-auto mb-8">
            <p className="text-text-muted text-[10px] tracking-[1px] leading-relaxed">
              לא מרוצה מהמפגש הראשון?{' '}
              <span className="text-cream font-semibold">החזר כספי מלא — ללא שאלות.</span>
            </p>
          </div>

          <p className="text-text-muted text-[10px] tracking-[2px] uppercase">
            מקומות מוגבלים · RoyHouse © {new Date().getFullYear()}
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
