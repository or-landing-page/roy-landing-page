import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SITE_CONFIG } from '@/lib/constants'

export function CTABanner() {
  return (
    <section className="py-20 sm:py-28 bg-surface relative overflow-hidden">
      {/* Gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <AnimatedSection>
          <p className="text-gold text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            מוכן להתחיל?
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-text-primary leading-tight mb-6">
            הצעד הראשון
            <br />
            <span className="text-gold">מתחיל כאן</span>
          </h2>
          <p className="text-text-muted text-base sm:text-lg max-w-xl mx-auto mb-10">
            בין אם אתה רוצה להיראות טוב יותר, או לבנות קריירה בספרות — אני כאן בשבילך.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-background font-black px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-xl shadow-gold/20 w-full sm:w-auto"
            >
              קבע תור עכשיו →
            </a>
            <a
              href={SITE_CONFIG.whatsappCoursesLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gold/40 hover:border-gold text-gold font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:bg-gold/5 w-full sm:w-auto"
            >
              שמעו על הקורסים
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
