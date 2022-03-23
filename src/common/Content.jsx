import React from "react";
import { Route, Routes } from "react-router-dom";
import Calendar from "../components/calendar/Calendar";
import Header from "../components/header/Header";
import Patients from "../components/patients/Patients";
import Staff from "../components/staff/Staff";
import styles from "./content.module.scss";
function Content() {
  return (
    <div className={styles.content}>
      <Header />
      <Routes>
        <Route path="staff" element={<Staff />} />
        <Route path="patients" element={<Patients />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="/" element={<Calendar />} />
      </Routes>
    </div>
  );
}

export default Content;
