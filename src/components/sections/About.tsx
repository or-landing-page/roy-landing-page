import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { SITE_CONFIG } from '@/lib/constants'

const highlights = [
  { value: `${SITE_CONFIG.yearsExperience}+`, label: 'שנות ניסיון', icon: '✂️' },
  { value: `${SITE_CONFIG.clientsCount}+`, label: 'לקוחות מרוצים', icon: '👑' },
  { value: `${SITE_CONFIG.studentsCount}+`, label: 'סטודנטים בוגרים', icon: '🎓' },
  { value: '100%', label: 'שביעות רצון', icon: '⭐' },
]

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image placeholder */}
          <AnimatedSection direction="right">
            <div className="relative">
              <div className="aspect-[3/4] bg-surface-2 rounded-2xl overflow-hidden border border-border">
                <div className="absolute inset-0 flex items-center justify-center text-text-muted text-6xl">
                  💈
                </div>
                {/* TODO: replace with next/image of Roy's portrait */}
              </div>
              {/* Experience badge */}
              <div className="absolute -bottom-6 -end-6 bg-gold text-background rounded-xl px-6 py-4 shadow-xl">
                <p className="text-3xl font-black">{SITE_CONFIG.yearsExperience}+</p>
                <p className="text-sm font-bold">שנות ניסיון</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection direction="left" delay={0.15}>
            <SectionTitle eyebrow="אודות" title="מי" titleHighlight="אני?" />

            <div className="space-y-5 text-text-muted leading-relaxed mb-10">
              <p>
                שמי רוי, ספר מקצועי מתל אביב עם {SITE_CONFIG.yearsExperience}+ שנות ניסיון
                בתעשייה. התחלתי בגיל צעיר עם תשוקה אמיתית לאמנות הספרות — ומאז לא הפסקתי
                ללמוד, להתפתח, ולהעביר הלאה.
              </p>
              <p>
                אני מאמין שספרות טובה היא הרבה יותר מתספורת — היא חוויה, קשר, ומצוינות. כל
                לקוח שנכנס אצלי יוצא עם תספורת שמתאימה בדיוק לו — לפנים שלו, לסגנון שלו,
                לאישיות שלו.
              </p>
              <p>
                בשנים האחרונות הרחבתי את הפעילות לקורסים מקצועיים — ועד היום{' '}
                {SITE_CONFIG.studentsCount}+ ספרים בוגרים ממשיכים הלאה עם כלים אמיתיים ועסק
                שעובד.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="bg-background rounded-xl p-4 border border-border text-center"
                >
                  <p className="text-2xl mb-1">{h.icon}</p>
                  <p className="text-xl font-black text-gold">{h.value}</p>
                  <p className="text-text-muted text-xs mt-0.5">{h.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
