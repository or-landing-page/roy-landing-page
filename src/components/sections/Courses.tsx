import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { COURSES, SITE_CONFIG } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Courses() {
  return (
    <section id="courses" className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <SectionTitle
            eyebrow="קורסים מקצועיים"
            title="רוצה ללמוד"
            titleHighlight="מהטוב ביותר?"
            subtitle={`${SITE_CONFIG.studentsCount}+ ספרים כבר עשו את זה. עכשיו תורך.`}
            centered
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4 max-w-4xl mx-auto">
          {COURSES.map((course, i) => (
            <AnimatedSection key={course.id} delay={i * 0.15}>
              <div
                className={cn(
                  'relative h-full flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1',
                  course.popular
                    ? 'bg-surface border-gold/50 shadow-xl shadow-gold/10'
                    : 'bg-surface border-border hover:border-gold/20 hover:shadow-lg hover:shadow-gold/5'
                )}
              >
                {course.popular && (
                  <div className="absolute -top-4 start-1/2 -translate-x-1/2">
                    <span className="bg-gold text-background text-xs font-black px-5 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                      ⭐ {course.tag}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-2">
                    {course.subtitle}
                  </p>
                  <h3 className="text-text-primary font-black text-2xl mb-3">{course.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{course.description}</p>
                </div>

                {/* Meta */}
                <div className="flex gap-4 mb-6 text-sm">
                  <span className="flex items-center gap-1.5 text-text-muted">
                    <span className="text-gold">📅</span>
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1.5 text-text-muted">
                    <span className="text-gold">📚</span>
                    {course.modules} מודולים
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-8 flex-1">
                  {course.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-text-muted">
                      <span className="w-4 h-4 rounded-full bg-gold/15 text-gold flex items-center justify-center text-xs flex-shrink-0">
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="border-t border-border pt-6">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <p className="text-text-muted text-sm line-through">₪{course.originalPrice}</p>
                      <p className="text-3xl font-black text-text-primary">
                        ₪<span className="text-gold">{course.price}</span>
                      </p>
                    </div>
                    <p className="text-gold text-sm font-semibold">
                      חסכון של{' '}
                      ₪{(
                        parseInt(course.originalPrice.replace(',', '')) -
                        parseInt(course.price.replace(',', ''))
                      ).toLocaleString('he-IL')}
                    </p>
                  </div>
                  <a
                    href={SITE_CONFIG.whatsappCoursesLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'block w-full text-center font-black py-3.5 rounded-xl text-base transition-all duration-200',
                      course.popular
                        ? 'bg-gold hover:bg-gold-light text-background hover:scale-105 shadow-lg shadow-gold/20'
                        : 'border border-gold/40 text-gold hover:border-gold hover:bg-gold/5'
                    )}
                  >
                    אני רוצה להתחיל →
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-text-muted text-sm">
              יש שאלות לפני שמחליטים?{' '}
              <a href={SITE_CONFIG.whatsappCoursesLink} className="text-gold hover:underline font-semibold">
                דברו איתי ישירות →
              </a>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
