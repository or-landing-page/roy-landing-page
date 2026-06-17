import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { Hero } from '@/components/sections/Hero'
import { PainPoints } from '@/components/sections/PainPoints'
import { Courses } from '@/components/sections/Courses'
import { About } from '@/components/sections/About'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTABanner } from '@/components/sections/CTABanner'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Courses />
        <About />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
