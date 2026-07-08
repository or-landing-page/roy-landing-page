import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { Hero } from '@/components/sections/Hero'
import { IntroCTA } from '@/components/sections/IntroCTA'
import { PainPoints } from '@/components/sections/PainPoints'
import { Method } from '@/components/sections/Method'
import { Curriculum } from '@/components/sections/Curriculum'
import { WhoIsItFor } from '@/components/sections/WhoIsItFor'
import { About } from '@/components/sections/About'
import { Gallery } from '@/components/sections/Gallery'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { CTABanner } from '@/components/sections/CTABanner'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IntroCTA />
        <PainPoints />
        <Method />
        <Curriculum />
        <WhoIsItFor />
        <About />
        <Gallery />
        <Testimonials />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
