import { type Room } from "./types";
import { formatDescription } from "./utils";

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
    description: formatDescription(
      "חדרי המטיילים הינם חדרים פשוטים בגדלים שונים המאפשרים לכל מטייל את הנוחות הבסיסית שהוא צריך. בכל חדר יש מקלחת ושירותים, פינת קפה, מגבות, מצעים וסבון גוף..."
    ),
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
      { name: "ערבה", value: "מיטה זוגית/טווין (בהתאם לבקשה)" },
      { name: "יעלים", value: "2-4 מיטות יחיד" },
      { name: "דרגות", value: "מיטה זוגית + 3 מיטות יחיד" },
    ],
  },
  {
    id: 3,
    title: "טנטי סטודיו",
    description: formatDescription(
      "2 אוהלי בוטיק זוגיים על המצוק הראשון הצופה אל נופו של ים המלח.האוהלים המיוחדים והמרווחים עוצבו בהשראת הטנטי הזוגי,כיחידה מרווחת יותר- כ 40 מר.בכל יחידה מיטה זוגית/טווין, טלוויזיה,..."
    ),
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
    title: "הטנטי הצפוני",
    description: formatDescription(
      "אביב 2024 מתחמם ואיתו הפתעות רבות(:שמחים לבשר על פתיחת היחידות החדשות שלנו - החל ממאי 2024:9 אוהלי בוטיק על המצוק הצפוני הצופה אל נופו של ים המלח*יחידה אחת..."
    ),
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
    description: formatDescription(
      "אוהל בוטיק על המצוק הראשון הצופה אל נופו של ים המלח.האוהל המחיוחד עוצב בהשראת הטנטי הזוגי וכולל חדר שינה וסלון.ביחידה חדר שינה עם מיטה זוגית/טווין, טלוויזיה ונוף לים..."
    ),
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
        value: "מטבח מאובזר",
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
    description: formatDescription(
      "אוהל 'גלאמפינג' בעל אופי 'בוטיקי' הפונה אל נופו של ים המלח.כל אוהל מתאים לזוג או ליחיד, כאשר דלתות הזכוכית ישאירו את הנוף למולכם גם כשאתם בפנים.בחדר תהנו ממקלחת..."
    ),
    images: [
      "src/assets/images/tenty/tenty_1.jpg",
      "src/assets/images/tenty/tenty_2.jpg",
      "src/assets/images/tenty/tenty_3.jpg",
      "src/assets/images/tenty/tenty_4.jpg",
      "src/assets/images/tenty/tenty_5.jpg",
      "src/assets/images/tenty/tenty_6.jpg",
      "src/assets/images/tenty/tenty_7.jpg",
      "src/assets/images/tenty/tenty_8.jpg",
      "src/assets/images/tenty/tenty_9.jpg",
      "src/assets/images/tenty/tenty_10.jpg",
      "src/assets/images/tenty/tenty_11.jpg",
      "src/assets/images/tenty/tenty_12.jpg",
    ],
    comment: "*מינימום 2 לילות להזמנה בסופי השבוע וחגים.",
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
    title: "מול הים",
    description: formatDescription(
      "חדר בוטיק זוגי. חדר אינטימי בקצהו של המצוק בעל נוף מרהיב.בחדר תהנו ממקלחת ושירותים פרטיים, טלוויזיה, מכונת אספרסו, מיני מקרר, פינת קפה, מגבות ומצעים. ישנה שכשוכית חיצונית פרטית להתרעננות. (בחודשי החורף השכושוכיות סגורות). במול ים המחודש תהנו מאווירה זוגית רומנטית עם שקט מדברי ונופו של ים המלח."
    ),
    images: [
      "src/assets/images/mul_hayam/mul_hayam_1.jpg",
      "src/assets/images/mul_hayam/mul_hayam_2.jpg",
      "src/assets/images/mul_hayam/mul_hayam_3.jpg",
      "src/assets/images/mul_hayam/mul_hayam_4.jpg",
      "src/assets/images/mul_hayam/mul_hayam_5.jpg",
      "src/assets/images/mul_hayam/mul_hayam_6.jpg",
      "src/assets/images/mul_hayam/mul_hayam_7.jpg",
      "src/assets/images/mul_hayam/mul_hayam_8.jpg",
      "src/assets/images/mul_hayam/mul_hayam_9.jpg",
      "src/assets/images/mul_hayam/mul_hayam_10.jpg",
      "src/assets/images/mul_hayam/mul_hayam_11.jpg",
    ],
    comment: "*אין בבקתה זו WIFI *מינימום 2 לילות להזמנה בסופי השבוע וחגים.",
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
    description: formatDescription(
      "מתחם הקמפינג שלנו רחב, מגוון. ומאפשר לינה בחושות, אוהלים מדבריים או אוהל פרטי שאתם מביאים אתכם מהבית ומקימים אצלנו במתחם, על אדמת המדבר, תחת כיפת השמיים ללא צל. במתחם נמצא מטבח לשימוש אורחי הכפר המאובזר בגז, מקררים ומשטח הכנה לבישול. שירותים ומקלחות משותפים. כמו כן, ישנם מקומות מוסדרים לגריל ומדורות - יש להצטייד בעצים להבערה מראש או לרכוש בהגעה (בהתאם למלאי.) *אוהל מדברי: מינימום 20 אורחים - להזמנות צרו עמנו קשר * אין חימום/קירור במתחם הקמפינג * חושה קטנה: 2-5 אורחים * חושה גדולה: 4-8 אורחים * המזרנים בחושות בהתאם לכמות האורחים * לא מספקים מזרונים לאוהל פרטי."
    ),
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
