import React, { useState } from "react";
import styles from "./staff.module.scss";
import TuneIcon from "@mui/icons-material/Tune";
import GroupsIcon from "@mui/icons-material/Groups";
import { Dialog } from "@mui/material";
import AddDentist from "./add-dentist/AddDentist";
import AddAdmin from "./add-admin/AddAdmin";
import AddStaffDialog from "./AddStaffDialog";

function Staff() {

  return (
    <div className={styles.main}>
      <div className={styles.wrap}>
        <div className={styles.options}>
          <div>Персонал</div>
        </div>
        <div className={styles.nav}>
          <div>
            <input type="text" placeholder="Поиск по таблице" />{" "}
          </div>
          <div className={styles.icons}>
            <div>
              <TuneIcon />
            </div>
            <div>Фильтр</div>
          </div>
          <span>
            <div className={styles.icons}>
              <div>
                <GroupsIcon />
              </div>
              <AddStaffDialog/>
            </div>
          </span>
        </div>
      </div>
      <div className={styles.filters}>
        <div className={styles.wall}>
          <div className={styles["staff-list"]}>
            <div>Доктора</div>
            <div>Администраторы</div>
          </div>
        </div>
        <div className={styles.recordings}>Записей:-</div>
        <div className={styles.filt}>
          <nav>
            <span>
              <li>id</li>
              <li>ФИО</li>
            </span>
            <li>Email</li>
            <li>Телефон</li>
            <li>Специальность</li>
            <li>Действия</li>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Staff;
