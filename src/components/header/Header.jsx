import React from "react";
import styles from "./header.module.scss";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import AccessTimeFilledTwoToneIcon from "@mui/icons-material/AccessTimeFilledTwoTone";
import TaskRoundedIcon from "@mui/icons-material/TaskRounded";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Patients from "../patients/Patients";
function Header() {
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
            <li>Добавить пациента</li>
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
      <Patients />
    </div>
  );
}

export default Header;
