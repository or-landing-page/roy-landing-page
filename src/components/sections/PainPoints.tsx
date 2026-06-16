import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { PAIN_POINTS } from '@/lib/constants'

export function PainPoints() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-gold text-[10px] tracking-[6px] uppercase font-semibold mb-6 text-center">
            הבעיה
          </p>
          <h2
            className="font-display font-light text-cream text-center leading-[1.15] mb-4"
            style={{ fontSize: 'clamp(28px, 5vw, 52px)' }}
          >
            למה רוב הספרים
            <br />
            <em className="text-gold-light not-italic font-light italic">תקועים באותו מקום?</em>
          </h2>
          <p className="text-text-muted text-sm text-center max-w-lg mx-auto mb-16 leading-relaxed font-light">
            אתה טוב במה שאתה עושה. אבל יש משהו שמונע ממך לקפוץ לרמה הבאה — ואתה יודע בדיוק על מה
            אנחנו מדברים.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PAIN_POINTS.map((point, i) => (
            <AnimatedSection key={point.id} delay={i * 0.1} direction="up">
              <div className="group h-full bg-surface-2/50 border border-border hover:border-gold/30 p-6 transition-all duration-300">
                <div className="text-2xl mb-4">{point.icon}</div>
                <h3 className="text-cream font-semibold text-sm mb-2 tracking-wide">{point.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed font-light">{point.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
