import React from "react";
import { Route, Routes } from "react-router-dom";
import Calendar from "../components/calendar/Calendar";
import Header from "../components/header/Header";
import Patients from "../components/patients/Patients";
import Staff from "../components/staff/Staff";
import styles from "./content.module.scss";
import Profile from "../components/patients/profile/Profile";
import Visit from "../components/patients/visit/Visit";
import Formul from "../components/patients/formul/Formul";
import Services from "../components/services/Services";
function Content() {
  return (
    <div className={styles.content}>
      <Header />
      <Routes>
        <Route path="/staff" element={<Staff />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/" element={<Calendar />} />
        <Route path="/patients/profile" element={<Profile />} />
        <Route path="/patients/profile/visit" element={<Visit />} />
        <Route path="/patients/profile/formula" element={<Formul />} />
      </Routes>
    </div>
  );
}

export default Content;
