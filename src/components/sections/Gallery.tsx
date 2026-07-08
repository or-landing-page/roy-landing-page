import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionTitle } from '@/components/ui/SectionTitle'

const BEFORE_AFTER_PAIRS = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  label: `עבודה ${i + 1}`,
}))

export function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-28 bg-surface scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <SectionTitle
            eyebrow="גלריה"
            title="העבודות"
            titleHighlight="שלנו"
            subtitle="כל תמונה מספרת סיפור של מקצועיות, סגנון ותשומת לב לפרטים."
            centered
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {BEFORE_AFTER_PAIRS.map((pair, i) => (
            <AnimatedSection key={pair.id} delay={i * 0.05}>
              <div className="bg-surface-2 rounded-xl overflow-hidden border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5">
                <div className="grid grid-cols-2 gap-px bg-border">
                  {/* TODO: replace with next/image of actual before photo */}
                  <div className="relative aspect-square flex items-center justify-center bg-surface-2 text-text-muted/30 text-3xl">
                    <span className="absolute top-2 right-2 text-[9px] tracking-[2px] uppercase font-bold text-gold bg-background/80 px-2 py-1 rounded">
                      לפני
                    </span>
                    ✂️
                  </div>
                  {/* TODO: replace with next/image of actual after photo */}
                  <div className="relative aspect-square flex items-center justify-center bg-surface-2 text-text-muted/30 text-3xl">
                    <span className="absolute top-2 right-2 text-[9px] tracking-[2px] uppercase font-bold text-gold bg-background/80 px-2 py-1 rounded">
                      אחרי
                    </span>
                    ✂️
                  </div>
                </div>
                <p className="text-text-muted text-xs tracking-[1px] text-center py-3">
                  {pair.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-gold border border-gold/40 hover:border-gold hover:bg-gold/5 font-bold px-8 py-3 rounded-lg transition-all duration-200"
          >
            ראה עוד עבודות באינסטגרם →
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
