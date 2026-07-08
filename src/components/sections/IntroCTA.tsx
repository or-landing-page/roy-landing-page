import { Button } from '@/components/ui/Button'
import { SITE_CONFIG, NEXT_COHORT } from '@/lib/constants'
import Link from 'next/link'

export function IntroCTA() {
  return (
    <section className="relative w-full bg-background py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Preheader */}
        <p className="text-text-muted text-sm md:text-base font-medium tracking-widest mb-6">
          קורס מקצועי בברברינג
        </p>

        {/* Main heading */}
        <h2 className="font-display text-4xl md:text-6xl font-light mb-6 text-text-primary leading-tight">
          משראש ליד
          <span className="block text-gold font-light">השיטה של רוי</span>
        </h2>

        {/* Subheading */}
        <p className="text-text-muted text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          למדו את הגיאומטריה, האנטומיה, וסגנון אישי. הפכו לברברים שמתמחרים נכון ובונים לקוחות שחוזרים.
        </p>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="#curriculum">
            <Button size="lg" variant="primary">
              הרשמה עכשיו — {NEXT_COHORT.spotsTotal - NEXT_COHORT.spotsTaken} מקומות בלבד ⚡
            </Button>
          </Link>
          <Link href="#method">
            <Button size="lg" variant="outline">
              למד עוד על השיטה
            </Button>
          </Link>
        </div>

        {/* Trust signal */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 text-text-muted text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gold font-bold">✓</span>
            <span>{SITE_CONFIG.studentsCount}+ ברברים הכפילו את המחיר</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gold font-bold">✓</span>
            <span>8 שבועות קורס אינטנסיבי</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gold font-bold">✓</span>
            <span>200+ שעות עבודה בשדה</span>
          </div>
        </div>
      </div>
    </section>
  )
}
