import React from "react";
import styles from "./staff.module.scss";
import TuneIcon from "@mui/icons-material/Tune";
import GroupsIcon from "@mui/icons-material/Groups";
import AddStaffDialog from "./AddStaffDialog";
import DentistList from "./dentist/DentistList";
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
              <AddStaffDialog />
            </div>
          </span>
        </div>
      </div>
      <DentistList/>
    </div>
  );
}

export default Staff;
