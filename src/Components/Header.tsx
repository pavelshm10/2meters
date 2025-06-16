import React from "react";

function Header() {
  return (
    <div
      style={{
        paddingRight: "2.5rem",
        paddingTop: "1rem",
        textAlign: "right",
        direction: "rtl",
      }}
      className="header-container"
    >
      <ul style={{ padding: 0, margin: 0 }}>
        <li>בתאריך ה-19.9 נתארח במצוקי דרגות - ים המלח</li>
        <li>
          קבלת חדרים בשעה: 16:00 ביום שישי ה-19.9 | עזיבת חדרים בשעה 15:00 ביום
          שבת ה-20.9
        </li>
        <li>
          רכישת חדר אינה מקנה כרטיס כניסה לפסטיבל. יש לרכוש בנוסף גם כרטיס
          כניסה.
        </li>
        <li>
          באחריות המזמין לשמור על ציוד ותקינות המתקנים בחדר. כרטיס אשראי יילקח
          כפיקדון. במקרה של נזק בחדר ישפה המזמין את מצוקי דרגות בעלות התיקון
          והנזק.
        </li>
        <li>
          לביצוע הזמנה ופרטים נוספים יש לפנות למספר בווטסאפ: 054-809-77450
        </li>
      </ul>
    </div>
  );
}

export default Header;
