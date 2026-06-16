import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { SERVICES } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <SectionTitle
            eyebrow="שירותים"
            title="מה"
            titleHighlight="אנחנו מציעים"
            subtitle="כל שירות מבוצע ברמה הגבוהה ביותר, עם כלים מקצועיים ותשומת לב לכל פרט."
            centered
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-2">
          {SERVICES.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 0.1}>
              <div
                className={cn(
                  'relative h-full flex flex-col bg-surface rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/5',
                  service.popular
                    ? 'border-gold/40 shadow-md shadow-gold/10'
                    : 'border-border hover:border-gold/20'
                )}
              >
                {service.popular && (
                  <span className="absolute -top-3 start-1/2 -translate-x-1/2 bg-gold text-background text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    הכי פופולרי
                  </span>
                )}

                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-text-primary font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed flex-1">
                  {service.description}
                </p>

                <div className="mt-5 pt-4 border-t border-border flex items-end justify-between">
                  <div>
                    <p className="text-text-muted text-xs mb-0.5">{service.duration}</p>
                    <p className="text-gold font-black text-xl">{service.price}₪</p>
                  </div>
                  <a
                    href="#"
                    className={cn(
                      'text-sm font-bold px-4 py-2 rounded-lg transition-all duration-200',
                      service.popular
                        ? 'bg-gold text-background hover:bg-gold-light'
                        : 'border border-gold/40 text-gold hover:border-gold hover:bg-gold/5'
                    )}
                  >
                    הזמן
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
