export const NEXT_COHORT = {
  label: 'המחזור הקרוב',
  spotsTotal: 10,
  spotsTaken: 7,
} as const

export const SITE_CONFIG = {
  name: 'ROYCE HOUSE',
  phone: '+972-XX-XXXXXXX',
  whatsappNumber: '972XXXXXXXXX',
  get whatsappLink() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent('היי, אני רוצה לשמוע על הקורס 📚')}`
  },
  get whatsappCoursesLink() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent('היי, אני רוצה לשמוע על הקורס 📚')}`
  },
  instagram: 'https://instagram.com/royhouse_il',
  address: 'תל אביב, ישראל',
  email: 'roy@royhouse.co.il',
  yearsExperience: 10,
  studentsCount: 200,
} as const

export const NAV_LINKS = [
  { label: 'השיטה', href: '#method' },
  { label: 'הקורס', href: '#curriculum' },
  { label: 'אודות', href: '#about' },
  { label: 'שאלות', href: '#faq' },
] as const

export const PAIN_POINTS_PRO = [
  {
    id: 1,
    title: 'חיקוי בלי הבנה',
    text: 'לומדים לחקות תספורות, לזכור שלבים, לעבוד לפי הרגל — בלי להבין אנטומיית הראש, גיאומטריה, או התאמה אישית.',
  },
  {
    id: 2,
    title: 'ביצוע בלי תוצאה',
    text: 'עושים פעולות — לא יוצרים תוצאה. חסרים הכלים לראות את התספורת לפני המגע הראשון.',
  },
  {
    id: 3,
    title: 'חסרה גיאומטריה',
    text: 'בלי הבנת גיאומטריה של תספורת ואנטומיה, כל תספורת היא ניחוש — לא שיטה.',
  },
  {
    id: 4,
    title: 'אין התאמה ללקוח',
    text: 'לא מצליחים להתאים סגנון ללקוח ספציפי — כי לא לימדו לקרוא פנים ומבנה ראש.',
  },
] as const

export const PAIN_POINTS_BIZ = [
  {
    id: 5,
    title: 'תמחור לא נכון',
    text: 'לא מתמחרים נכון ונשארים מתחת לממוצע השוק — כי חסרה ביטחון לבקש את המחיר האמיתי.',
  },
  {
    id: 6,
    title: 'חוסר בעסקי',
    text: 'חוסר הבנה עסקית: ניהול משא ומתן, יחסי אנוש, ובניית לקוחות שחוזרים מעצמם.',
  },
  {
    id: 7,
    title: 'מכירה רק תספורות',
    text: 'לא מגדילים סל קנייה ללקוח — נשארים בתספורת בלבד, בלי שירותים נוספים.',
  },
] as const

export const METHOD_PARAMS = [
  {
    num: '01',
    title: 'מבנה פנים',
    text: 'זיהוי צורת הפנים והבנת ההתאמות הנדרשות לכל לקוח',
  },
  {
    num: '02',
    title: 'אנטומיית מבנה הראש',
    text: 'קריאת הקווים הטבעיים, נקודות הגדילה, והמרקם הייחודי',
  },
  {
    num: '03',
    title: 'סוג שיער ודפוס צמחיה',
    text: 'זיהוי המרקם, הגלים, וצפיפות הצמחיה — לפני שנוגעים',
  },
  {
    num: '04',
    title: 'צפיפות השיער',
    text: 'הבנת הנפח ואיך הוא משפיע על הגזירה והפייד',
  },
  {
    num: '05',
    title: 'סגנון אישי',
    text: 'שילוב אישיות הלקוח וסגנון חיים לתוצאה שמדברת עליה',
  },
] as const

export const CURRICULUM = [
  { session: 1, title: 'מבוא לעולם הברברינג', subtitle: 'אנטומיה וגיאומטריה' },
  { session: 2, title: 'סוגי מבנה ראש', subtitle: 'סוגי שיער' },
  { session: 3, title: 'חלוקות עבודה', subtitle: 'זוויות גזירה' },
  { session: 4, title: 'דירוגים', subtitle: 'מעברי מכונה' },
  { session: 5, title: 'בניית תספורת שלמה', subtitle: '' },
  { session: 6, title: 'עבודה על בובות', subtitle: '' },
  { session: 7, title: 'שילוב טכניקות', subtitle: 'תיקון טעויות' },
  { session: 8, title: 'עבודה מתקדמת', subtitle: 'סיכום' },
] as const

export const WHO_IS_IT_FOR_YES = [
  'מתחילים שרוצים מקצוע',
  'ספרים בתחילת הדרך',
  'ספרים שרוצים להעלות רמה',
  'בעלי מספרות שרוצים שיטה מסודרת',
] as const

export const WHO_IS_IT_FOR_NO = [
  'מי שמחפש קיצורי דרך',
  'מי שלא מוכן להתאמן',
  'מי שמחפש רק טריקים לאינסטגרם',
] as const

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'יוסי כ.',
    location: 'תל אביב',
    text: 'אחרי הקורס הכפלתי את המחיר שלי ואף לקוח לא הלך. הייתי מוכן לזה — זה מה שהקורס נותן.',
    rating: 5,
  },
  {
    id: 2,
    name: 'אדם מ.',
    location: 'חיפה',
    text: 'סוף סוף מישהו שמסביר את ה-Fade בצורה שאפשר לחזור עליה. לא מזל — שיטה. אחרי שבוע ראשון כבר ראיתי תוצאות.',
    rating: 5,
  },
  {
    id: 3,
    name: 'רועי ש.',
    location: 'ירושלים',
    text: 'השקעתי בקורס ותוך חודש החזרתי פי 3 את הסכום. אין ויכוח — זו ההשקעה הטובה ביותר שעשיתי.',
    rating: 5,
  },
] as const

export const FAQ_ITEMS = [
  {
    id: 1,
    question: 'האם צריך ניסיון קודם?',
    answer: 'לא. הקורס בנוי גם למתחילים לגמרי. מתחילים מהבסיס ומתקדמים שלב אחר שלב — עם ליווי בכל המסע.',
  },
  {
    id: 2,
    question: 'האם מקבלים תעודה בסוף?',
    answer: 'כן. כל בוגר מקבל תעודה בסיום הקורס.',
  },
  {
    id: 3,
    question: 'כמה תלמידים בכל מחזור?',
    answer: 'מספר המקומות מוגבל כדי לאפשר ליווי אישי לכל תלמיד. לכן כל מחזור נסגר מוקדם.',
  },
  {
    id: 4,
    question: 'האם יש ליווי לאחר הקורס?',
    answer: 'כן. יש ליווי לאחר הקורס — הפרטים מוגדרים בשיחת הרשמה אישית.',
  },
  {
    id: 5,
    question: 'אילו כלים צריך להביא?',
    answer: 'רשימת הכלים הנדרשת נשלחת לאחר ההרשמה. לא צריך לדאוג לזה לפני.',
  },
  {
    id: 6,
    question: 'הקורס פרונטלי או אונליין?',
    answer: 'הקורס פרונטלי לחלוטין — 8 מפגשים, 40 שעות אקדמיות. אי אפשר ללמוד מקצוע ביד מסך.',
  },
] as const
