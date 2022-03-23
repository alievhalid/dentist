import React from "react";
import styles from "./calendar.module.scss";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
function Calendar() {
  return (
    <div className={styles.calendar}>
      <div className={styles.wrap}>
        <div className={styles.options}>
          <div>Расписание:</div>
          <div>На неделю</div>
        </div>
        <nav>
          <li className={styles.doctor}>Выберите доктора</li>
          <li className={styles["calendar-icon"]}>
            <EventAvailableIcon />
          </li>
          <div className={styles.icons}>
            <div>
              <PersonAddAltIcon />
            </div>
            <li>Новый визит</li>
          </div>
        </nav>
      </div>
      <div className={styles.doctors}>
        <div>
            У вас не заведено ни одного врача. Добавить врача можно <a href="/patients">здесь</a>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
