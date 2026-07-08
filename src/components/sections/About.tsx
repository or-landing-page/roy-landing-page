import Image from 'next/image'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SITE_CONFIG } from '@/lib/constants'

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-background scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-gold text-[10px] tracking-[6px] uppercase font-semibold mb-12 text-center">
            אודות
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Portrait */}
          <AnimatedSection direction="right">
            <div className="relative aspect-[3/4] border border-gold/15 overflow-hidden">
              <Image
                src="/roi-photo.jpg"
                alt="רוי — ספר מקצועי ומייסד RoyHouse"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(8,8,8,0.7) 0%, transparent 50%)',
                }}
              />

              {/* Experience badge */}
              <div className="absolute -bottom-5 -start-5 bg-gold px-5 py-3 text-background z-10">
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
            <blockquote
              className="font-display font-light italic text-gold-light leading-relaxed mb-6"
              style={{ fontSize: 'clamp(16px, 2.5vw, 22px)' }}
            >
              &ldquo;הבנתי שחסרה שיטת לימוד אמיתית — אחת שמבוססת על הבנת מבנה הראש, לא רק על
              חיקוי.&rdquo;
            </blockquote>

            <div className="w-12 h-px bg-gold/50 mb-6" />

            <p className="text-text-muted text-sm leading-relaxed font-light mb-8">
              {/* Roy's story — content coming from client */}
              מייסד ROYCE HOUSE ACADEMY, עם {SITE_CONFIG.yearsExperience}+ שנות ניסיון בעולם
              הברברינג והעיצוב. הדרך שעבר — מספר שעבד לפי הרגל עד שפיתח שיטה שמבוססת על הבנת
              מבנה הראש — היא הבסיס לכל מה שמלמד כאן.
            </p>

            {/* Proof points — to be updated with real data */}
            <div className="flex flex-col gap-4">
              {[
                `${SITE_CONFIG.studentsCount}+ בוגרים מוכשרים`,
                'שיטת HEAD TO HAND — פותחה אחרי שנים בשטח',
                'ליווי אישי לכל תלמיד לאורך כל הדרך',
              ].map((text) => (
                <div key={text} className="flex items-start gap-3">
                  <span className="text-gold text-xs mt-0.5 flex-shrink-0">✦</span>
                  <p className="text-text-muted text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
