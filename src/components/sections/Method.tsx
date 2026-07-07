import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { METHOD_PARAMS } from '@/lib/constants'

export function Method() {
  return (
    <section
      id="method"
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #080808 0%, rgba(184,150,62,0.04) 50%, #080808 100%)',
      }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-gold text-[10px] tracking-[6px] uppercase font-semibold mb-6 text-center">
            המתודולוגיה
          </p>
          <h2
            className="font-display font-light text-cream text-center leading-[1.1] mb-4"
            style={{ fontSize: 'clamp(28px, 5vw, 52px)', letterSpacing: '4px' }}
          >
            THE HEAD TO HAND
            <br />
            <em className="text-gold-light not-italic font-light italic">METHOD</em>
          </h2>
          <p className="text-text-muted text-sm text-center max-w-lg mx-auto mb-16 leading-relaxed font-light">
            מהראש אל היד — אבחון ואפיון לפי 5 פרמטרים לפני כל מגע, ואז ניגשים לטכניקת הגזירה
            והפייד.
          </p>
        </AnimatedSection>

        {/* Params */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
          {METHOD_PARAMS.map((param, i) => (
            <AnimatedSection key={param.num} delay={0.08 * i} direction="up">
              <div className="group relative border border-border/60 hover:border-gold/40 p-6 md:p-8 transition-all duration-300 h-full flex flex-col">
                {/* connector line between cards (desktop) */}
                {i < METHOD_PARAMS.length - 1 && (
                  <div
                    className="hidden md:block absolute top-1/2 -end-px w-px h-1/2 -translate-y-1/2 bg-border/40"
                    aria-hidden="true"
                  />
                )}

                <span
                  className="font-display font-light text-gold/20 text-3xl leading-none mb-4 group-hover:text-gold/40 transition-colors duration-300"
                  style={{ letterSpacing: '2px' }}
                >
                  {param.num}
                </span>
                <h3 className="text-cream font-semibold text-sm mb-3 leading-snug">
                  {param.title}
                </h3>
                <p className="text-text-muted text-xs leading-relaxed font-light">{param.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Arrow down */}
        <AnimatedSection delay={0.5}>
          <div className="text-center mt-12">
            <div className="inline-flex flex-col items-center gap-2">
              <div className="w-px h-10 bg-gradient-to-b from-gold/40 to-transparent" />
              <p className="text-gold text-[10px] tracking-[4px] uppercase">
                ואז — טכניקת הגזירה והפייד
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
