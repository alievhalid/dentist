import React from "react";
import styles from "./sidebar.module.scss";
import logo from "../../images/logo.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupsIcon from "@mui/icons-material/Groups";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import CalculateIcon from "@mui/icons-material/Calculate";
import BallotIcon from "@mui/icons-material/Ballot";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
        <select>
          <option>Основной</option>
        </select>
      </div>
      <nav className={styles.nav}>
        <div className={styles.icons}>
          <div>
            <CalendarMonthIcon />
          </div>
          <li>Календарь</li>
        </div>
        <div className={styles.icons}>
          <div>
            <GroupsIcon />
          </div>
          <li>Пациенты</li>
        </div>
        <div className={styles.icons}>
          <div>
            <SettingsAccessibilityIcon />
          </div>
          <li>Персонал</li>
        </div>
        <div className={styles.icons}>
          <div>
            <FolderCopyIcon />
          </div>
          <li>Услуги</li>
        </div>
        <div className={styles.icons}>
          <div>
            <WarehouseIcon />
          </div>
          <li>Склад</li>
        </div>
        <div className={styles.icons}>
          <div>
            <BallotIcon />
          </div>
          <li>Отчеты</li>
        </div>
        <div className={styles.icons}>
          <div>
            <CalculateIcon />
          </div>
          <li>Бухгалтерия</li>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
