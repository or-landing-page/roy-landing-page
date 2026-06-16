import type { Metadata } from 'next'
import { Heebo } from 'next/font/google'
import './globals.css'

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  variable: '--font-heebo',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'רוי | ספר מקצועי ואקדמיה לספרות',
  description:
    'ספרות מקצועית ברמה הגבוהה ביותר. קורסים מקצועיים לספרים שרוצים להתקדם ולהצליח.',
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
    <html lang="he" dir="rtl">
      <body className={heebo.variable}>{children}</body>
    </html>
  )
}
