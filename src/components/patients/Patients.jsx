import React, {useState} from "react";
import styles from "./patients.module.scss";
import TuneIcon from "@mui/icons-material/Tune";
import GroupsIcon from "@mui/icons-material/Groups";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { NavLink } from "react-router-dom";
import { Dialog } from "@mui/material";
import AddPatients from "./AddPatients"

function Patients() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
            <div className={styles.icons}>
              <div>
                <GroupsIcon />
              </div>
              <div onClick={handleClickOpen}>Добавить</div>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog"
                maxWidth={"md"}
                fullWidth
              >
                <div className={styles.title}>
                  <h2>
                    Добавить пациента
                  </h2>
                  <AddPatients setOpen={setOpen} handleClose={handleClose} />
                </div>
              </Dialog>
            </div>
          </span>
        </div>
      </div>
      <div className={styles.filters}>
        <div className={styles.id}>id</div>
        <div>ФИО</div>
        <div>Телефон</div>
        <div>Карточка</div>
        <div>Возраст</div>
        <div>Депозит</div>
        <div>Состояние</div>
        <div>Действия</div>
      </div>
      <div className={styles.patients}>
        <div className={styles.id}>3211</div>
        <NavLink to={'/patients/profile/visit'}>
          <div className={styles.name}>Алиев Халид Ханзалатович</div>
        </NavLink>
        <div className={styles.number}>79633971674</div>
        <div>1</div>
        <div>
          Лет: 21 <span>(27.01.2001)</span>
        </div>
        <div>-</div>
        <div></div>
        <div className={styles["patients-icons"]}>
          <div>
            <EditIcon />
          </div>
          <li>
            <DeleteForeverIcon />
          </li>
        </div>
      </div>
    </div>
  );
}

export default Patients;
