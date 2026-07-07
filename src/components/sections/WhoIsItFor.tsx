import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { WHO_IS_IT_FOR_YES, WHO_IS_IT_FOR_NO } from '@/lib/constants'

export function WhoIsItFor() {
  return (
    <section
      id="who"
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, rgba(184,150,62,0.03) 0%, transparent 40%), #0f0f0f' }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-gold text-[10px] tracking-[6px] uppercase font-semibold mb-6 text-center">
            התאמה
          </p>
          <h2
            className="font-display font-light text-cream text-center leading-[1.15] mb-16"
            style={{ fontSize: 'clamp(28px, 5vw, 52px)' }}
          >
            למי הקורס
            <br />
            <em className="text-gold-light not-italic font-light italic">מתאים</em>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* YES */}
          <AnimatedSection direction="right">
            <div className="border border-gold/25 p-8 h-full">
              <p className="text-[10px] tracking-[4px] uppercase text-gold font-semibold mb-6">
                ✅ מתאים ל
              </p>
              <ul className="flex flex-col gap-4">
                {WHO_IS_IT_FOR_YES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gold rounded-full mt-2 flex-shrink-0" />
                    <span className="text-cream text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* NO */}
          <AnimatedSection direction="left" delay={0.1}>
            <div className="border border-border/50 p-8 h-full bg-surface-2/30">
              <p className="text-[10px] tracking-[4px] uppercase text-text-muted font-semibold mb-6">
                ❌ לא מתאים ל
              </p>
              <ul className="flex flex-col gap-4">
                {WHO_IS_IT_FOR_NO.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-border rounded-full mt-2 flex-shrink-0" />
                    <span className="text-text-muted text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
