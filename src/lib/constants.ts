export const SITE_CONFIG = {
  name: 'RoyHouse',
  phone: '+972-XX-XXXXXXX',
  whatsappNumber: '972XXXXXXXXX',
  get whatsappLink() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent('היי רוי, אני רוצה לקבוע תור 💈')}`
  },
  get whatsappCoursesLink() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent('היי רוי, אני רוצה לשמוע על הקורס 📚')}`
  },
  instagram: 'https://instagram.com/royhouse_il',
  address: 'תל אביב, ישראל',
  hours: 'ראשון–שישי: 09:00–20:00',
  email: 'roy@royhouse.co.il',
  yearsExperience: 10,
  studentsCount: 200,
  clientsCount: 3000,
} as const

export const NAV_LINKS = [
  { label: 'הקורס', href: '#course' },
  { label: 'אודות', href: '#about' },
  { label: 'המלצות', href: '#testimonials' },
] as const

export const PAIN_POINTS = [
  {
    id: 1,
    icon: '😤',
    title: 'לומד מיוטיוב',
    text: 'אתה מנסה ללמוד מסרטונים אבל אף פעם לא בטוח שאתה עושה את זה נכון — ואין מי שיגיד לך.',
  },
  {
    id: 2,
    icon: '💸',
    title: 'שווה יותר, מרוויח פחות',
    text: 'יודע שאתה שווה יותר — אבל לא מצליח להצדיק מחיר גבוה ללקוחות.',
  },
  {
    id: 3,
    icon: '🔄',
    title: 'תקוע באותו מקום',
    text: 'אותם לקוחות, אותן תספורות, אותה הכנסה — כל חודש מחדש, בלי התקדמות.',
  },
  {
    id: 4,
    icon: '🎯',
    title: 'חסרה לך השיטה',
    text: 'חסר לך הדבר שמפריד ספרים בינוניים מספרים שאנשים ממליצים עליהם לכולם.',
  },
] as const

export const SERVICES = [
  {
    id: 'haircut',
    title: 'תספורת גברים',
    description: 'תספורת מקצועית מותאמת אישית לפי מבנה פנים וסגנון אישי.',
    price: '80',
    duration: '45 דקות',
    icon: '✂️',
    popular: false,
  },
  {
    id: 'beard',
    title: 'עיצוב זקן',
    description: 'עיצוב וגמר מקצועי לכל סוגי הזקן — קלאסי, מודרני, ספרדי.',
    price: '50',
    duration: '30 דקות',
    icon: '🪒',
    popular: false,
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
    popular: false,
  },
] as const

export const COURSE_FEATURES = [
  'טכניקות Fade & Taper מתקדמות — מהבסיס לשליטה מלאה',
  'עיצוב זקן וקווים מדויקים — כל סוג, כל צורת פנים',
  'איך לעלות מחירים נכון — בלי לאבד לקוחות',
  'שיטה לבנות לקוחות שחוזרים ומביאים חברים',
  'ניהול עסק ספרות רווחי — תמחור, שיווק, מיתוג',
  'ליווי אישי של 3 חודשים אחרי הקורס',
  'תעודה מוכרת לפתיחת עסק',
] as const

export const COURSES = [
  {
    id: 'foundation',
    title: 'קורס ספרות מקצועי',
    subtitle: 'מהבסיס למקצוען',
    description:
      'שיטת העבודה המלאה — מהחתך הראשון ועד ללקוח שחוזר ומביא חברים. לא תיאוריה. טכניקה אמיתית, בשטח.',
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
    name: 'יוסי כ.',
    location: 'תל אביב',
    text: 'אחרי הקורס הכפלתי את המחיר שלי ואף לקוח לא הלך. הייתי מוכן לזה — זה מה שהקורס נותן.',
    rating: 5,
    emoji: '✂️',
  },
  {
    id: 2,
    name: 'אדם מ.',
    location: 'חיפה',
    text: 'סוף סוף מישהו שמסביר את ה-Fade בצורה שאפשר לחזור עליה. לא מזל — שיטה. אחרי שבוע ראשון כבר ראיתי תוצאות.',
    rating: 5,
    emoji: '✦',
  },
  {
    id: 3,
    name: 'רועי ש.',
    location: 'ירושלים',
    text: 'השקעתי בקורס ותוך חודש החזרתי פי 3 את הסכום. אין ויכוח — זו ההשקעה הטובה ביותר שעשיתי.',
    rating: 5,
    emoji: '★',
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
