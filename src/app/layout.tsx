import type { Metadata } from 'next'
import { Heebo, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  variable: '--font-heebo',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'RoyHouse | ספרות יוקרתית וקורס מקצועי',
  description:
    'הקורס שיהפוך אותך מספר טוב — לספר שכולם מדברים עליו. שיטת עבודה מלאה, טכניקות מתקדמות, תוצאות אמיתיות.',
  keywords: ['ספר', 'תספורת', 'קורס ספרות', 'ספרות מקצועית', 'אקדמיה לספרות'],
  openGraph: {
    title: 'רוי | ספר מקצועי',
    description: 'ספרות מקצועית וקורסים מקצועיים לספרים',
    locale: 'he_IL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  )
}
