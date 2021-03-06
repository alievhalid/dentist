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
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function Sidebar() {
  const auth = useSelector((state) => state.authReducer);
  console.log(auth.role);
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <select>
          <option>Основной</option>
        </select>
      </div>
      <nav className={styles.nav}>
        <NavLink to="/calendar">
          {({ isActive }) => (
            <div className={isActive ? styles.active : ""}>
              <div className={styles.icons}>
                <div>
                  <CalendarMonthIcon />
                </div>
                <li>Календарь</li>
              </div>
            </div>
          )}
        </NavLink>
        <NavLink to="/patients">
          {({ isActive }) => (
            <div className={isActive ? styles.active : ""}>
              <div className={styles.icons}>
                <div>
                  <GroupsIcon />
                </div>
                <li>Пациенты</li>
              </div>
            </div>
          )}
        </NavLink>
        <NavLink to="/staff">
          {({ isActive }) => (
            <div className={isActive ? styles.active : " "}>
              <div className={styles.icons}>
                <div>
                  <SettingsAccessibilityIcon />
                </div>
                <li>Персонал</li>
              </div>
            </div>
          )}
        </NavLink>
        <NavLink to="/services">
          {({ isActive }) => (
            <div className={isActive ? styles.active : " "}>
              <div className={styles.icons}>
                <div>
                  <FolderCopyIcon />
                </div>
                <li>Услуги</li>
              </div>
            </div>
          )}
        </NavLink>

        {auth.role === "admin" ? (
          <div>
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
          </div>
        ) : null}
      </nav>
    </div>
  );
}

export default Sidebar;
