import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">שגיאה 404</p>
      <h1 className="text-5xl font-black text-text-primary mb-4">הדף לא נמצא</h1>
      <p className="text-text-muted mb-8">הדף שחיפשת לא קיים או הועבר.</p>
      <Link
        href="/"
        className="bg-gold hover:bg-gold-light text-background font-bold px-8 py-3 rounded-lg transition-all duration-200"
      >
        חזרה לדף הבית
      </Link>
    </div>
  )
}
