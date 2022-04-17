import React, { useState } from "react";
import styles from "./header.module.scss";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import AccessTimeFilledTwoToneIcon from "@mui/icons-material/AccessTimeFilledTwoTone";
import TaskRoundedIcon from "@mui/icons-material/TaskRounded";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Dialog } from "@mui/material";
import AddPatients from "../patients/AddPatients";
function Header() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div className={styles.inputs}>
          <input type="text" placeholder="Поиск пациента" />
        </div>
        <nav className={styles.nav}>
          <div className={styles.icons}>
            <li>
              <PersonAddAltRoundedIcon />
            </li>
            <li onClick={handleClickOpen}>Добавить пациента</li>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog"
              maxWidth={"md"}
              fullWidth
            >
              <div className={styles.title}>
                <h2>Добавить пациента</h2>
                <AddPatients setOpen={setOpen} handleClose={handleClose} />
              </div>
            </Dialog>
          </div>
          <div className={styles.icons}>
            <li>
              <AccessTimeFilledTwoToneIcon />
            </li>
            <li>Лист ожидания</li>
          </div>
          <div className={styles.icons}>
            <li>
              <TaskRoundedIcon />
            </li>
            <li>Задачи</li>
          </div>
          <div className={styles.icons}>
            <li>
              <AccountCircleOutlinedIcon />
            </li>
            <li>Халид</li>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
