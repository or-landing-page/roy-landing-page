export const SITE_CONFIG = {
  name: 'רוי',
  fullName: 'Roy Barber',
  phone: '+972-XX-XXXXXXX',
  whatsappNumber: '972XXXXXXXXX',
  get whatsappLink() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent('היי רוי, אני רוצה לקבוע תור 💈')}`
  },
  get whatsappCoursesLink() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent('היי רוי, אני מעוניין לשמוע על הקורסים שלך 📚')}`
  },
  instagram: 'https://instagram.com/roybarber_il',
  address: 'תל אביב, ישראל',
  hours: 'ראשון–שישי: 09:00–20:00',
  email: 'roy@roybarber.co.il',
  yearsExperience: 10,
  studentsCount: 500,
  clientsCount: 3000,
} as const

export const NAV_LINKS = [
  { label: 'אודות', href: '#about' },
  { label: 'שירותים', href: '#services' },
  { label: 'גלריה', href: '#gallery' },
  { label: 'קורסים', href: '#courses' },
  { label: 'המלצות', href: '#testimonials' },
  { label: 'שאלות נפוצות', href: '#faq' },
] as const

export const SERVICES = [
  {
    id: 'haircut',
    title: 'תספורת גברים',
    description: 'תספורת מקצועית מותאמת אישית לפי מבנה פנים וסגנון אישי.',
    price: '80',
    duration: '45 דקות',
    icon: '✂️',
  },
  {
    id: 'beard',
    title: 'עיצוב זקן',
    description: 'עיצוב וגמר מקצועי לכל סוגי הזקן — קלאסי, מודרני, ספרדי.',
    price: '50',
    duration: '30 דקות',
    icon: '🪒',
  },
  {
    id: 'combo',
    title: 'תספורת + זקן',
    description: 'החבילה המלאה — תספורת ועיצוב זקן בביקור אחד.',
    price: '110',
    duration: '75 דקות',
    icon: '👑',
    popular: true,
  },
  {
    id: 'shave',
    title: 'גילוח קלאסי',
    description: 'גילוח ישר עם סבון גילוח, מגבת חמה ואחרי-גילוח.',
    price: '60',
    duration: '30 דקות',
    icon: '🪒',
  },
] as const

export const COURSES = [
  {
    id: 'foundation',
    title: 'קורס ספרות — מקצועי',
    subtitle: 'מהבסיס למקצוען',
    description:
      'הכל מאפס — כלים, טכניקות, עבודה עם לקוחות, ועסק רווחי. הקורס המלא שתאמין בו.',
    duration: '8 שבועות',
    modules: 12,
    price: '2,990',
    originalPrice: '4,500',
    tag: 'הכי פופולרי',
    popular: true,
    features: [
      'טכניקות תספורת מתקדמות',
      'עיצוב זקן מקצועי',
      'גילוח ישר קלאסי',
      'שיווק ובניית לקוחות',
      'ניהול עסק ספרות',
      'תעודה מוכרת',
      'ליווי אישי 3 חודשים',
    ],
  },
  {
    id: 'advanced',
    title: 'קורס מתקדמים',
    subtitle: 'לספרים שרוצים לצמוח',
    description: 'טכניקות מתקדמות, עבודה עם לקוחות VIP, ובניית מותג אישי חזק.',
    duration: '4 שבועות',
    modules: 6,
    price: '1,490',
    originalPrice: '2,200',
    tag: '',
    popular: false,
    features: [
      'טכניקות מתקדמות (Fade, Taper)',
      'עיצוב עם שעווה ופומד',
      'צילום עבודות לרשתות',
      'תמחור ומיצוב',
      'ייעוץ עסקי אישי',
    ],
  },
] as const

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'יוסי כהן',
    role: 'בוגר קורס ספרות',
    text: 'הקורס של רוי שינה לי את החיים. תוך 3 חודשים פתחתי ספרייה משלי וכבר יש לי 80 לקוחות קבועים.',
    rating: 5,
    type: 'course',
    emoji: '✂️',
  },
  {
    id: 2,
    name: 'דני לוי',
    role: 'לקוח קבוע',
    text: 'באתי לפני שנה בלי לדעת מה אני רוצה. רוי הבין מה מתאים לי יותר ממני. מאז אני בא כל 3 שבועות.',
    rating: 5,
    type: 'service',
    emoji: '👑',
  },
  {
    id: 3,
    name: 'אמיר שפירו',
    role: 'בוגר קורס ספרות',
    text: 'ניסיתי קורסים אחרים — אין מה להשוות. רוי מלמד בצורה מקצועית ואמיתית. כל שקל שווה.',
    rating: 5,
    type: 'course',
    emoji: '🎓',
  },
  {
    id: 4,
    name: 'מיכאל ברק',
    role: 'לקוח קבוע',
    text: 'הכי טוב שניסיתי בתל אביב. תמיד יוצא מרוצה. האווירה, הסגנון, הרמה — הכל פרימיום.',
    rating: 5,
    type: 'service',
    emoji: '⭐',
  },
] as const

export const FAQ_ITEMS = [
  {
    id: 1,
    category: 'service',
    question: 'איך קובעים תור?',
    answer: 'דרך WhatsApp ישירות. לוחצים על "קבע תור" ואנחנו נסדר אותך בהקדם האפשרי.',
  },
  {
    id: 2,
    category: 'service',
    question: 'כמה עולה תספורת?',
    answer: 'תספורת מתחילה מ-80₪. גילוח 50₪. החבילה המלאה (תספורת + זקן) 110₪.',
  },
  {
    id: 3,
    category: 'course',
    question: 'למי מתאים הקורס?',
    answer:
      'לכל אחד — בין אם אתה מתחיל לגמרי ובין אם ספר מנוסה שרוצה לשדרג. הקורס מותאם לקצב שלך.',
  },
  {
    id: 4,
    category: 'course',
    question: 'האם יש תעודה בסוף?',
    answer: 'כן. בוגרי הקורס מקבלים תעודה מוכרת שאפשר להשתמש בה לפתיחת עסק.',
  },
  {
    id: 5,
    category: 'course',
    question: 'כמה זמן לוקח הקורס?',
    answer: 'הקורס הבסיסי הוא 8 שבועות, 3 מפגשים בשבוע. הקורס המתקדם 4 שבועות.',
  },
  {
    id: 6,
    category: 'course',
    question: 'האם יש ליווי אחרי הקורס?',
    answer: 'כן — 3 חודשי ליווי אישי כלולים בקורס הבסיסי. תמיד יש למי לפנות.',
  },
] as const
