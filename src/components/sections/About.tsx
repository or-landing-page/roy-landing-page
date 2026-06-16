import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SITE_CONFIG } from '@/lib/constants'

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-gold text-[10px] tracking-[6px] uppercase font-semibold mb-12 text-center">
            אודות
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Portrait placeholder */}
          <AnimatedSection direction="right">
            <div
              className="relative aspect-[3/4] border border-gold/15 flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #1a1208, #0f0c06)' }}
            >
              <span
                className="text-gold/30 text-[11px] tracking-[4px] uppercase text-center"
              >
                תמונה
                <br />
                מקצועית
              </span>

              {/* Experience badge */}
              <div className="absolute -bottom-5 -start-5 bg-gold px-5 py-3 text-background">
                <div className="font-display font-light text-3xl leading-none">
                  {SITE_CONFIG.yearsExperience}+
                </div>
                <div className="text-[9px] tracking-[2px] uppercase font-bold mt-0.5">
                  שנות ניסיון
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection direction="left" delay={0.1}>
            {/* Italic quote */}
            <blockquote
              className="font-display font-light italic text-gold-light leading-relaxed mb-6"
              style={{ fontSize: 'clamp(16px, 2.5vw, 22px)' }}
            >
              &ldquo;שיערתי לאלפי לקוחות לפני שהבנתי מה באמת מפריד ספר טוב מספר שמחפשים
              אחריו.&rdquo;
            </blockquote>

            <div className="w-12 h-px bg-gold/50 mb-6" />

            <p className="text-text-muted text-sm leading-relaxed font-light mb-8">
              רוי הוא ספר שיער עם {SITE_CONFIG.yearsExperience}+ שנות ניסיון, מייסד RoyHouse
              ומחנך את הדור הבא של ספרי השיער בישראל. השיטה שלו מבוססת על עקרונות פשוטים: דיוק,
              עקביות, ולקוחות שחוזרים.
            </p>

            {/* Stats */}
            <div className="flex gap-8">
              {[
                { value: `${SITE_CONFIG.yearsExperience}+`, label: 'שנות ניסיון' },
                { value: `${SITE_CONFIG.studentsCount}+`, label: 'ספרים הוכשרו' },
                { value: `${SITE_CONFIG.clientsCount.toLocaleString()}+`, label: 'לקוחות' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="font-display font-light text-gold"
                    style={{ fontSize: 'clamp(22px, 3vw, 32px)', letterSpacing: '2px' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-text-muted text-[10px] tracking-[2px] uppercase mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
