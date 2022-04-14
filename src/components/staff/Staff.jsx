import React, { useState } from "react";
import styles from "./staff.module.scss";
import TuneIcon from "@mui/icons-material/Tune";
import GroupsIcon from "@mui/icons-material/Groups";
import { Dialog } from "@mui/material";
import AddStaff from "./AddStaff";
import AddAdmin from "./AddAdmin";

function Staff() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [staff, setStaff] = useState(true);
  const [admin, setAdmin] = useState(false);
  const handleStaff = () => {
    setStaff(true);
    setAdmin(false);
  };
  const handleAdmin = () => {
    setAdmin(true);
    setStaff(false);
  };
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
              <div onClick={handleClickOpen}>Добавить</div>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog"
                maxWidth={"md"}
                fullWidth
              >
                <div className={styles.title}>
                  <h2 onClick={handleStaff} className={staff ? styles.active : ''}>
                    Добавить доктора
                  </h2>
                  <h2 onClick={handleAdmin} className={admin ? styles.active : ''}>
                    Добавить администратора
                  </h2>
                </div>
                {staff ? (
                  <AddStaff setOpen={setOpen} handleClose={handleClose} />
                ) : (
                  <AddAdmin />
                )}
              </Dialog>
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
