import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero-mock.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/60 to-black/75" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Logo mark */}
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-gold/60 md:h-16 md:w-16">
          <Image src="/logo.png" alt="ROYCE HOUSE" width={32} height={32} className="h-8 w-8" />
        </div>

        {/* Wordmark */}
        <h1 className="font-display text-2xl md:text-3xl font-light tracking-[0.3em] text-text-primary">
          ROYCE HOUSE
        </h1>

        {/* Divider */}
        <div className="my-4 h-px w-12 bg-gold" />

        {/* Subtitle */}
        <p className="text-text-muted text-sm md:text-base max-w-md leading-relaxed">
          קורס מקצועי בברברינג — השיטה של רוי
        </p>

        {/* CTA link */}
        <Link
          href="#curriculum"
          className="mt-8 text-gold text-sm tracking-wide hover:text-gold-light transition-colors"
        >
          לפרטי הקורס ←
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
