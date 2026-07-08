import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionTitle } from '@/components/ui/SectionTitle'

const GALLERY_ITEMS = Array.from({ length: 9 }, (_, i) => ({
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

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 gap-4 mt-4">
          {GALLERY_ITEMS.map((item, i) => (
            <AnimatedSection key={item.id} delay={i * 0.05} className="mb-4 break-inside-avoid">
              <div
                className={`bg-surface-2 rounded-xl overflow-hidden border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5 ${
                  i % 3 === 0 ? 'aspect-[3/4]' : i % 3 === 1 ? 'aspect-square' : 'aspect-[4/3]'
                }`}
              >
                {/* TODO: replace with next/image of actual work */}
                <div className="w-full h-full flex items-center justify-center text-text-muted/30 text-4xl">
                  ✂️
                </div>
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
