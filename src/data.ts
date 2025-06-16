import { type Room } from "./types";

// Import all images using Vite's import.meta.glob
const images = import.meta.glob<{ default: string }>(
  "/src/assets/images/**/*.{jpg,jpeg,png,svg}",
  { eager: true }
);

export const rooms: Room[] = [
  // {
  //   id: 1,
  //   title: "דירות המצוק",
  //   description: formatDescription(
  //     "דירות מאובזרות וגדולות עם נוף קסום.בכל דירה שני חדרי שינה וסלון ומתאימות לעד שמונה אנשים.בדירה תהנו מ WIFI ומטבח מצויד בכלים בסיסיים, מקרר, מיקרוגל, פלטה חשמלית וקומקום. בכל..."
  //   ),
  //   comment: "*מינימום 2 לילות להזמנה בסופי השבוע וחגים.",
  //   images: [
  //     "src/assets/images/dirot_hamazok/dirot_hamazok_1.jpg",
  //     "src/assets/images/dirot_hamazok/dirot_hamazok_2.jpg",
  //     "src/assets/images/dirot_hamazok/dirot_hamazok_3.jpg",
  //     "src/assets/images/dirot_hamazok/dirot_hamazok_4.jpg",
  //     "src/assets/images/dirot_hamazok/dirot_hamazok_5.jpg",
  //     "src/assets/images/dirot_hamazok/dirot_hamazok_6.jpg",
  //     "src/assets/images/dirot_hamazok/dirot_hamazok_7.jpg",
  //     "src/assets/images/dirot_hamazok/dirot_hamazok_8.jpg",
  //     "src/assets/images/dirot_hamazok/dirot_hamazok_9.jpg",
  //     "src/assets/images/dirot_hamazok/dirot_hamazok_10.jpg",
  //     "src/assets/images/dirot_hamazok/dirot_hamazok_11.jpg",
  //     "src/assets/images/dirot_hamazok/dirot_hamazok_12.jpg",
  //     "src/assets/images/dirot_hamazok/dirot_hamazok_13.jpg",
  //     "src/assets/images/dirot_hamazok/dirot_hamazok_14.jpg",
  //     "src/assets/images/dirot_hamazok/dirot_hamazok_15.jpg",
  //     "src/assets/images/dirot_hamazok/dirot_hamazok_16.jpg",
  //   ],
  //   facilities: [
  //     {
  //       value: "80 מ״ר",
  //       icon: "src/assets/icons/area.svg",
  //     },
  //     { value: "8 אורחים", icon: "src/assets/icons/guests.svg" },
  //     {
  //       value: "4 מיטות יחיד",
  //       icon: "src/assets/icons/single_beds.svg",
  //     },
  //     {
  //       value: "1 מיטה זוגית",
  //       icon: "src/assets/icons/double_beds.svg",
  //     },
  //     { value: "WIFI", icon: "src/assets/icons/wifi.svg" },
  //     {
  //       value: "מכונת אספרסו",
  //       icon: "src/assets/icons/coffee.svg",
  //     },
  //     { value: "טלויזיה חכמה", icon: "src/assets/icons/tv.svg" },
  //     { value: "ספה נפתחת", icon: "src/assets/icons/couch.svg" },
  //     {
  //       value: "לול לתינוק",
  //       icon: "src/assets/icons/baby_bed.svg",
  //     },
  //     {
  //       value: "מיזוג",
  //       icon: "src/assets/icons/air_conditioner.svg",
  //     },
  //     {
  //       value: "מטבח מאובזר",
  //       icon: "src/assets/icons/kitchen.svg",
  //     },
  //   ],
  // },
  {
    id: 2,
    title: "חדרי מטיילים",
    description:
      "חדרי המטיילים הינם חדרים פשוטים בגדלים שונים המאפשרים לכל מטייל את הנוחות הבסיסית שהוא צריך. בכל חדר יש מקלחת ושירותים, פינת קפה, מגבות, מצעים וסבון גוף ומיני מקרר (בחדרי יעלים נמצא במרפסת).",
    images: [
      images["/src/assets/images/metaylim/metaylim_1.jpg"].default,
      images["/src/assets/images/metaylim/metaylim_2.jpg"].default,
      images["/src/assets/images/metaylim/metaylim_3.jpg"].default,
      images["/src/assets/images/metaylim/metaylim_4.jpg"].default,
      images["/src/assets/images/metaylim/metaylim_5.jpg"].default,
      images["/src/assets/images/metaylim/metaylim_6.jpg"].default,
      images["/src/assets/images/metaylim/metaylim_7.jpg"].default,
      images["/src/assets/images/metaylim/metaylim_8.jpg"].default,
      images["/src/assets/images/metaylim/metaylim_9.jpg"].default,
      images["/src/assets/images/metaylim/metaylim_10.jpg"].default,
      images["/src/assets/images/metaylim/metaylim_11.jpg"].default,
      images["/src/assets/images/metaylim/metaylim_12.jpg"].default,
      images["/src/assets/images/metaylim/metaylim_13.jpg"].default,
      images["/src/assets/images/metaylim/metaylim_14.jpg"].default,
      images["/src/assets/images/metaylim/metaylim_15.jpg"].default,
      images["/src/assets/images/metaylim/metaylim_16.jpg"].default,
      images["/src/assets/images/metaylim/metaylim_17.jpg"].default,
      images["/src/assets/images/metaylim/metaylim_18.jpg"].default,
    ],
    facilities: [
      { value: "WIFI", icon: "src/assets/icons/wifi.svg" },
      {
        value: "פינת קפה / תה",
        icon: "src/assets/icons/coffee.svg",
      },
      {
        value: "מיזוג",
        icon: "src/assets/icons/air_conditioner.svg",
      },
      { value: "מיני מקרר", icon: "src/assets/icons/kitchen.svg" },
      {
        value: "חדר מקלחת ושירותים פרטי",
        icon: "src/assets/icons/toilet.svg",
      },
      {
        value: "מרפסת משותפת",
        icon: "src/assets/icons/balcony.svg",
      },
    ],
    rooms: [
      { name: "ערבה", value: "מיטה זוגית/טווין (בהתאם לבקשה) - 700 ש״ח" },
      { name: "יעלים", value: "2 מיטות - 800 ש״ח / 3 מיטות - 1000 ש״ח / 4 מיטות - 1200 ש״ח" },
      { name: "דרגות", value: "מיטה זוגית + 3 מיטות יחיד - 1350 ש״ח" },
    ],
  },
  {
    id: 3,
    title: "טנטי סטודיו",
    description:
      '* 1000 ש״ח\nאוהלי בוטיק זוגיים על המצוק הראשון הצופה אל נופו של ים המלח.\nהאוהלים המיוחדים והמרווחים עוצבו בהשראת הטנטי הזוגי,כיחידה מרווחת יותר- כ 40 מ"ר.\nבכל יחידה מיטה זוגית/טווין, טלוויזיה, מיני מקרר, שירותים ומקלחת וכמובן נוף לים המלח.\nתוכלו להתרענן מחוץ ליחידה בשכשוכית פרטית מרעננת הצופה לנוף (בחודשי החורף סגורות)',
    images: [
      "src/assets/images/tenty_studio/tenty_studio_1.jpg",
      "src/assets/images/tenty_studio/tenty_studio_2.jpg",
      "src/assets/images/tenty_studio/tenty_studio_3.jpg",
      "src/assets/images/tenty_studio/tenty_studio_4.jpg",
      "src/assets/images/tenty_studio/tenty_studio_5.jpg",
      "src/assets/images/tenty_studio/tenty_studio_6.jpg",
      "src/assets/images/tenty_studio/tenty_studio_7.jpg",
    ],
    facilities: [
      {
        value: "40 מ״ר",
        icon: "src/assets/icons/area.svg",
      },
      { value: "2 אורחים", icon: "src/assets/icons/guests.svg" },
      {
        value: "מיטה זוגית/טווין",
        icon: "src/assets/icons/double_beds.svg",
      },
      { value: "WIFI", icon: "src/assets/icons/wifi.svg" },
      {
        value: "מכונת אספרסו",
        icon: "src/assets/icons/coffee.svg",
      },
      { value: "טלויזיה חכמה", icon: "src/assets/icons/tv.svg" },
      {
        value: "מיזוג",
        icon: "src/assets/icons/air_conditioner.svg",
      },
      {
        value: "פינת קפה / תה",
        icon: "src/assets/icons/coffee.svg",
      },
    ],
  },
  {
    id: 4,
    title: "טנטי צפוני",
    description:
      '* 1000 ש״ח\nאוהלי בוטיק על המצוק הצפוני הצופה אל נופו של ים המלח\nכל יחידה מרווחת יותר- כ 44 מ"ר.\nבכל יחידה חדר שינה וסלון-\nמיטה זוגית/טווין, טלוויזיה, מיקרוגל, מיני מקרר, שירותים ומקלחת וכמובן נוף לים המלח.\n*בסלון ישנה ספה נפתחת לעד 2 ילדים.\nתוכלו להתרענן מחוץ ליחידה בשכשוכית פרטית מרעננת וקרירה הצופה לנוף (בחודשי החורף סגורות)\n\n*התמונות הינן להמחשה בלבד, לכל יחידה נוף שונה לכיוון הים והמדבר.\n\n*בכל יחידה ניתן להתארח עד 3 מבוגרים',
    images: [
      "src/assets/images/north_tenty/north_tenty_1.jpg",
      "src/assets/images/north_tenty/north_tenty_2.jpg",
      "src/assets/images/north_tenty/north_tenty_3.jpg",
      "src/assets/images/north_tenty/north_tenty_4.jpg",
      "src/assets/images/north_tenty/north_tenty_5.jpg",
      "src/assets/images/north_tenty/north_tenty_6.jpg",
      "src/assets/images/north_tenty/north_tenty_7.jpg",
      "src/assets/images/north_tenty/north_tenty_8.jpg",
      "src/assets/images/north_tenty/north_tenty_9.jpg",
      "src/assets/images/north_tenty/north_tenty_10.jpg",
      "src/assets/images/north_tenty/north_tenty_11.jpg",
      "src/assets/images/north_tenty/north_tenty_12.jpg",
      "src/assets/images/north_tenty/north_tenty_13.jpg",
    ],
    facilities: [
      {
        value: "44 מ״ר",
        icon: "src/assets/icons/area.svg",
      },
      {
        value: "מיטה זוגית/טווין",
        icon: "src/assets/icons/double_beds.svg",
      },
      { value: "ספה נפתחת", icon: "src/assets/icons/couch.svg" },
      { value: "WIFI", icon: "src/assets/icons/wifi.svg" },
      {
        value: "מכונת אספרסו",
        icon: "src/assets/icons/coffee.svg",
      },
      { value: "טלויזיה חכמה", icon: "src/assets/icons/tv.svg" },
      {
        value: "מיזוג",
        icon: "src/assets/icons/air_conditioner.svg",
      },
      {
        value: "פינת קפה / תה",
        icon: "src/assets/icons/coffee.svg",
      },
    ],
  },
  {
    id: 5,
    title: "טנטי פלוס",
    description:
      "* 1400 ש״ח\nאוהל בוטיק על המצוק הראשון הצופה אל נופו של ים המלח.\nהאוהל המחיוחד עוצב בהשראת הטנטי הזוגי וכולל חדר שינה וסלון.\nביחידה חדר שינה עם מיטה זוגית/טווין, טלוויזיה ונוף לים המלח.\nבסלון יש מיטה וחצי, ספה נפתחת, טלווויזיה, מטבחון (אינו מאובזר) הכולל מיני מקרר, מיקרוגל, מכונת קפה, קומקום, שירותים ומקלחת.\nתוכלו להתרענן מחוץ ליחידה בשכשוכית פרטית מרעננת (בחודשי החורף השכושוכיות סגורות)\n\n*בכל יחידה ניתן להתארח עד 3 מבוגרים",
    images: [
      "src/assets/images/tenty_plus/tenty_plus_1.jpg",
      "src/assets/images/tenty_plus/tenty_plus_2.jpg",
      "src/assets/images/tenty_plus/tenty_plus_3.jpg",
      "src/assets/images/tenty_plus/tenty_plus_4.jpg",
      "src/assets/images/tenty_plus/tenty_plus_5.jpg",
      "src/assets/images/tenty_plus/tenty_plus_6.jpg",
      "src/assets/images/tenty_plus/tenty_plus_7.jpg",
      "src/assets/images/tenty_plus/tenty_plus_8.jpg",
      "src/assets/images/tenty_plus/tenty_plus_9.jpg",
    ],
    facilities: [
      {
        value: "40 מ״ר",
        icon: "src/assets/icons/area.svg",
      },
      { value: "4 אורחים", icon: "src/assets/icons/guests.svg" },
      {
        value: "מיטה זוגית/טווין",
        icon: "src/assets/icons/double_beds.svg",
      },
      { value: "WIFI", icon: "src/assets/icons/wifi.svg" },
      {
        value: "מכונת אספרסו",
        icon: "src/assets/icons/coffee.svg",
      },
      { value: "טלויזיה חכמה", icon: "src/assets/icons/tv.svg" },
      { value: "ספה נפתחת", icon: "src/assets/icons/couch.svg" },
      {
        value: "מיזוג",
        icon: "src/assets/icons/air_conditioner.svg",
      },
      {
        value: "מטבח (לא מאובזר)",
        icon: "src/assets/icons/kitchen.svg",
      },
      {
        value: "פינת קפה / תה",
        icon: "src/assets/icons/coffee.svg",
      },
    ],
  },
  {
    id: 6,
    title: "טנטי",
    description:
      '* 800 ש״ח\nאוהל "גלאמפינג" בעל אופי "בוטיקי" הפונה אל נופו של ים המלח.\nכל אוהל מתאים לזוג או ליחיד, כאשר דלתות הזכוכית ישאירו את הנוף למולכם גם כשאתם בפנים.\nבחדר תהנו ממקלחת ושירותים פרטיים, טלוויזיה, מכונת אספרסו, מיני מקרר, פינת קפה, מגבות, מצעים .\nבמרפסת ישנה שכשוכית חיצונית לרענון בימי הקיץ החמים.\n(בחודשי החורף השכושוכיות סגורות)',
    images: [
      "src/assets/images/tenty/tenty_1.jpg",
      "src/assets/images/tenty/tenty_2.jpg",
      "src/assets/images/tenty/tenty_3.jpg",
      "src/assets/images/tenty/tenty_4.jpg",
      "src/assets/images/tenty/tenty_5.jpg",
      "src/assets/images/tenty/tenty_6.jpg",
      "src/assets/images/tenty/tenty_7.jpg",
      "src/assets/images/tenty/tenty_8.jpg",
      // "src/assets/images/tenty/tenty_9.jpg",
      "src/assets/images/tenty/tenty_10.jpg",
      "src/assets/images/tenty/tenty_11.jpg",
      "src/assets/images/tenty/tenty_12.jpg",
    ],
    facilities: [
      {
        value: "18 מ״ר",
        icon: "src/assets/icons/area.svg",
      },
      { value: "2 אורחים", icon: "src/assets/icons/guests.svg" },
      {
        value: "מיטה זוגית/טווין",
        icon: "src/assets/icons/double_beds.svg",
      },
      { value: "WIFI", icon: "src/assets/icons/wifi.svg" },
      {
        value: "מכונת אספרסו",
        icon: "src/assets/icons/coffee.svg",
      },
      { value: "טלויזיה חכמה", icon: "src/assets/icons/tv.svg" },
      {
        value: "מיזוג",
        icon: "src/assets/icons/air_conditioner.svg",
      },
      {
        value: "פינת קפה / תה",
        icon: "src/assets/icons/coffee.svg",
      },
    ],
  },
  {
    id: 7,
    title: "מול ים",
    description:
      "* 1200 ש״ח \nחדר בוטיק זוגי. חדר אינטימי בקצהו של המצוק בעל נוף מרהיב.\nבחדר תהנו ממקלחת ושירותים פרטיים, טלוויזיה, מכונת אספרסו, מיני מקרר, פינת קפה, מגבות ומצעים.\n\nישנה שכשוכית חיצונית פרטית להתרעננות. \n(בחודשי החורף השכושוכיות סגורות).\nבמול ים המחודש תהנו מאווירה זוגית רומנטית עם שקט מדברי ונופו של ים המלח.\n\n*אין בבקתה זו WIFI",
    images: [
      "src/assets/images/mul_hayam/mul_hayam_1.jpg",
      "src/assets/images/mul_hayam/mul_hayam_2.jpg",
      "src/assets/images/mul_hayam/mul_hayam_3.jpg",
      "src/assets/images/mul_hayam/mul_hayam_4.jpg",
      "src/assets/images/mul_hayam/mul_hayam_5.jpg",
      "src/assets/images/mul_hayam/mul_hayam_6.jpg",
      "src/assets/images/mul_hayam/mul_hayam_7.jpg",
      // "src/assets/images/mul_hayam/mul_hayam_8.jpg",
      "src/assets/images/mul_hayam/mul_hayam_9.jpg",
      "src/assets/images/mul_hayam/mul_hayam_10.jpg",
    ],
    facilities: [
      {
        value: "18 מ״ר",
        icon: "src/assets/icons/area.svg",
      },
      { value: "2 אורחים", icon: "src/assets/icons/guests.svg" },
      {
        value: "1 מיטה זוגית",
        icon: "src/assets/icons/double_beds.svg",
      },
      {
        value: "מיזוג",
        icon: "src/assets/icons/air_conditioner.svg",
      },
      {
        value: "מכונת אספרסו",
        icon: "src/assets/icons/coffee.svg",
      },
      { value: "טלויזיה", icon: "src/assets/icons/tv.svg" },
      {
        value: "פינת קפה / תה",
        icon: "src/assets/icons/coffee.svg",
      },
    ],
  },
  {
    id: 8,
    title: "מתחם קמפינג",
    description:
      "מתחם הקמפינג שלנו רחב, מגוון ומאפשר לינה בחושות, אוהלים מדבריים או אוהל פרטי שאתם מביאים אתכם מהבית ומקימים אצלנו במתחם, על אדמת המדבר, תחת כיפת השמיים ללא צל.\nבמתחם נמצא מטבח לשימוש אורחי הכפר המאובזר בגז, מקררים ומשטח הכנה לבישול. שירותים ומקלחות משותפים.\n\n*אוהל מדברי: 2000 ש״ח\n* חושה קטנה: 200 ש״ח\n* חושה גדולה: 500 ש״ח\n* המזרנים בחושות בהתאם לכמות האורחים\n* לא מספקים מזרונים לאוהל פרטי",
    images: [
      "src/assets/images/camping/camping_1.jpg",
      "src/assets/images/camping/camping_2.jpg",
      "src/assets/images/camping/camping_3.jpg",
      "src/assets/images/camping/camping_4.jpg",
      "src/assets/images/camping/camping_5.jpg",
      "src/assets/images/camping/camping_6.jpg",
      "src/assets/images/camping/camping_7.jpg",
      "src/assets/images/camping/camping_8.jpg",
      "src/assets/images/camping/camping_9.jpg",
      "src/assets/images/camping/camping_10.jpg",
    ],
  },
];
