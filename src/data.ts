import { type Room } from "./types";

// Import all images
const dirotImages = import.meta.glob("./assets/images/dirot_hamazok/*.jpg", {
  eager: true,
  as: "url",
});
const metaylimImages = import.meta.glob("./assets/images/metaylim/*.jpg", {
  eager: true,
  as: "url",
});

// Import all icons
const icons = import.meta.glob("./assets/icons/*.svg", {
  eager: true,
  as: "url",
});

const getImageUrl = (path: string) => {
  const imagePath = path.replace("src/assets/", "./assets/");
  if (path.includes("dirot_hamazok")) {
    return dirotImages[imagePath] || "";
  }
  if (path.includes("metaylim")) {
    return metaylimImages[imagePath] || "";
  }
  return "";
};

const getIconUrl = (path: string) => {
  const iconPath = path.replace("src/assets/", "./assets/");
  return icons[iconPath] || "";
};

export const rooms: Room[] = [
  {
    id: 1,
    title: "דירות המצוק",
    description:
      "דירות מאובזרות וגדולות עם נוף קסום.בכל דירה שני חדרי שינה וסלון ומתאימות לעד שמונה אנשים.בדירה תהנו מ WIFI ומטבח מצויד בכלים בסיסיים, מקרר, מיקרוגל, פלטה חשמלית וקומקום. בכל...",
    comment: "*מינימום 2 לילות להזמנה בסופי השבוע וחגים.",
    images: [
      "src/assets/images/dirot_hamazok/dirot_hamazok_1.jpg",
      "src/assets/images/dirot_hamazok/dirot_hamazok_2.jpg",
      "src/assets/images/dirot_hamazok/dirot_hamazok_3.jpg",
      "src/assets/images/dirot_hamazok/dirot_hamazok_4.jpg",
      "src/assets/images/dirot_hamazok/dirot_hamazok_5.jpg",
      "src/assets/images/dirot_hamazok/dirot_hamazok_6.jpg",
      "src/assets/images/dirot_hamazok/dirot_hamazok_7.jpg",
      "src/assets/images/dirot_hamazok/dirot_hamazok_8.jpg",
      "src/assets/images/dirot_hamazok/dirot_hamazok_9.jpg",
      "src/assets/images/dirot_hamazok/dirot_hamazok_10.jpg",
      "src/assets/images/dirot_hamazok/dirot_hamazok_11.jpg",
      "src/assets/images/dirot_hamazok/dirot_hamazok_12.jpg",
      "src/assets/images/dirot_hamazok/dirot_hamazok_13.jpg",
      "src/assets/images/dirot_hamazok/dirot_hamazok_14.jpg",
      "src/assets/images/dirot_hamazok/dirot_hamazok_15.jpg",
      "src/assets/images/dirot_hamazok/dirot_hamazok_16.jpg",
    ].map(getImageUrl),
    facilities: [
      {
        value: "80 מ״ר",
        icon: getIconUrl("src/assets/icons/air_conditioner.svg"),
      },
      { value: "8 אורחים", icon: getIconUrl("src/assets/icons/guests.svg") },
      {
        value: "4 מיטות יחיד",
        icon: getIconUrl("src/assets/icons/single_beds.svg"),
      },
      {
        value: "1 מיטה זוגית",
        icon: getIconUrl("src/assets/icons/double_beds.svg"),
      },
      { value: "WIFI", icon: getIconUrl("src/assets/icons/wifi.svg") },
      {
        value: "מכונת אספרסו",
        icon: getIconUrl("src/assets/icons/coffee.svg"),
      },
      { value: "טלויזיה חכמה", icon: getIconUrl("src/assets/icons/tv.svg") },
      { value: "ספה נפתחת", icon: getIconUrl("src/assets/icons/couch.svg") },
      {
        value: "לול לתינוק",
        icon: getIconUrl("src/assets/icons/baby_bed.svg"),
      },
      {
        value: "מיזוג",
        icon: getIconUrl("src/assets/icons/air_conditioner.svg"),
      },
      {
        value: "מטבח מאובזר",
        icon: getIconUrl("src/assets/icons/kitchen.svg"),
      },
    ],
  },
  {
    id: 2,
    title: "חדרי מטיילים",
    description:
      "חדרי המטיילים הינם חדרים פשוטים בגדלים שונים המאפשרים לכל מטייל את הנוחות הבסיסית שהוא צריך. בכל חדר יש מקלחת ושירותים, פינת קפה, מגבות, מצעים וסבון גוף...",
    images: [
      "src/assets/images/metaylim/metaylim_1.jpg",
      "src/assets/images/metaylim/metaylim_2.jpg",
      "src/assets/images/metaylim/metaylim_3.jpg",
      "src/assets/images/metaylim/metaylim_4.jpg",
      "src/assets/images/metaylim/metaylim_5.jpg",
      "src/assets/images/metaylim/metaylim_6.jpg",
      "src/assets/images/metaylim/metaylim_7.jpg",
      "src/assets/images/metaylim/metaylim_8.jpg",
      "src/assets/images/metaylim/metaylim_9.jpg",
      "src/assets/images/metaylim/metaylim_10.jpg",
      "src/assets/images/metaylim/metaylim_11.jpg",
      "src/assets/images/metaylim/metaylim_12.jpg",
      "src/assets/images/metaylim/metaylim_13.jpg",
      "src/assets/images/metaylim/metaylim_14.jpg",
      "src/assets/images/metaylim/metaylim_15.jpg",
      "src/assets/images/metaylim/metaylim_16.jpg",
      "src/assets/images/metaylim/metaylim_17.jpg",
      "src/assets/images/metaylim/metaylim_18.jpg",
      "src/assets/images/metaylim/metaylim_19.jpg",
    ].map(getImageUrl),
    facilities: [
      { value: "WIFI", icon: getIconUrl("src/assets/icons/wifi.svg") },
      {
        value: "מכונת  פינת קפה / תה",
        icon: getIconUrl("src/assets/icons/coffee.svg"),
      },
      {
        value: "מיזוג",
        icon: getIconUrl("src/assets/icons/air_conditioner.svg"),
      },
      { value: "מיני מקרר", icon: getIconUrl("src/assets/icons/kitchen.svg") },
      {
        value: "חדר מקלחת ושירותים פרטי",
        icon: getIconUrl("src/assets/icons/toilet.svg"),
      },
      {
        value: "מרפסת משותפת",
        icon: getIconUrl("src/assets/icons/balcony.svg"),
      },
    ],
    rooms: [
      { name: "ערבה", value: "מיטה זוגית/טווין (בהתאם לבקשה)" },
      { name: "יעלים", value: "2-4 מיטות יחיד" },
      { name: "דרגות", value: "מיטה זוגית + 3 מיטות יחיד" },
    ],
  },
  // "טנטי סטודיו",
  // "הטנטי הצפוני- חדש!",
  // "טנטי פלוס",
  // "Tenty",
  // "מתחם קמפינג",
];
