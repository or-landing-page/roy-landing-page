import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { PAIN_POINTS_PRO, PAIN_POINTS_BIZ } from '@/lib/constants'

function PainCard({ title, text, index }: { title: string; text: string; index: number }) {
  return (
    <div className="group h-full bg-surface-2/50 border-2 border-border hover:border-gold hover:shadow-lg hover:scale-105 p-6 transition-all duration-300 relative overflow-hidden">
      <span
        className="absolute -top-2 -end-2 font-display font-light text-gold/5 leading-none select-none pointer-events-none"
        style={{ fontSize: '80px' }}
        aria-hidden="true"
      >
        {index + 1}
      </span>
      <div className="w-5 h-px bg-gold mb-4" />
      <h3 className="text-text-primary font-semibold text-sm mb-2 tracking-wide">{title}</h3>
      <p className="text-text-muted text-sm leading-relaxed font-light relative z-10">{text}</p>
    </div>
  )
}

export function PainPoints() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-gold text-[10px] tracking-[6px] uppercase font-semibold mb-6 text-center">
            הבעיה
          </p>
          <h2
            className="font-display font-light text-text-primary text-center leading-[1.15] mb-4"
            style={{ fontSize: 'clamp(28px, 5vw, 52px)' }}
          >
            הבעיה בעולם הספרות היום
            <br />
            <em className="text-gold-light not-italic font-light italic">
              בפן המקצועי והעסקי
            </em>
          </h2>
          <p className="text-text-muted text-sm text-center max-w-lg mx-auto mb-16 leading-relaxed font-light">
            רוב הספרים לומדים לחקות — לא להבין. זה ההבדל בין ספר שעובד לספר שבונה עסק.
          </p>
        </AnimatedSection>

        {/* Professional */}
        <AnimatedSection delay={0.05}>
          <p className="text-[10px] tracking-[4px] uppercase text-text-muted mb-4 border-b border-border pb-3">
            מקצועי
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {PAIN_POINTS_PRO.map((point, i) => (
            <AnimatedSection key={point.id} delay={0.1 + i * 0.08} direction="up">
              <PainCard title={point.title} text={point.text} index={i} />
            </AnimatedSection>
          ))}
        </div>

        {/* Business */}
        <AnimatedSection delay={0.05}>
          <p className="text-[10px] tracking-[4px] uppercase text-text-muted mb-4 border-b border-border pb-3">
            עסקי
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
          {PAIN_POINTS_BIZ.map((point, i) => (
            <AnimatedSection key={point.id} delay={0.1 + i * 0.08} direction="up">
              <PainCard title={point.title} text={point.text} index={i} />
            </AnimatedSection>
          ))}
        </div>

        {/* Transition line */}
        <AnimatedSection delay={0.2}>
          <div
            className="border border-gold/20 bg-gold/5 px-8 py-6 text-center"
          >
            <p className="font-display font-light italic text-gold-light text-lg">
              ב-ROYCE HOUSE אנחנו מלמדים לחשוב כמו מעצב שיער,
            </p>
            <p className="text-text-muted text-sm mt-1">לא רק לעבוד כמו טכנאי.</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
