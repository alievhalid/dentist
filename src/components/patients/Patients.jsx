import React, { useState } from "react";
import styles from "./patients.module.scss";
import TuneIcon from "@mui/icons-material/Tune";
import GroupsIcon from "@mui/icons-material/Groups";
import PatientsModal from "./modal/PatientsModal";
function Patients() {
  const [modal, setModal] = useState(false)

  const handleAdd = () => {
    setModal(true)
  }
  return (
    <div className={styles.main}>
      <div className={styles.wrap}>
        <div className={styles.options}>
          <div>Пациенты:</div>
          <div>По врачам</div>
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
            <div className={styles.icons} onClick={handleAdd}>
              <div>
                <GroupsIcon />
              </div>
              <div>Добавить</div>
            </div>
          </span>
        </div>
      </div>
      <div className={styles.filters}>
        <div>id</div>
        <div>ФИО</div>
        <div>Телефон</div>
        <div>Карточка</div>
        <div>Возраст</div>
        <div>Депозит</div>
        <div>Состояние</div>
        <div>Действия</div>
      </div>
      {modal && <PatientsModal />}
    </div>
  );
}

export default Patients;
