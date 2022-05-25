import React from "react";
import { Route, Routes } from "react-router-dom";
import Calendar from "../components/calendar/Calendar";
import Header from "../components/header/Header";
import Patients from "../components/patients/Patients";
import styles from "./content.module.scss";
import Profile from "../components/patients/profile/Profile";
import Visit from "../components/patients/visit/Visit";
import Formul from "../components/patients/formul/Formul";
import ServiceList from "../components/services/ServiceList";
import DentistList from "../components/staff/dentist/DentistList";
import Journal from "../components/journal/Journal";
import AdminList from "../components/staff/admin/AdminList";
import AdminProfile from "../components/staff/admin/adminProfile/AdminProfile";
import DentistProfile from "../components/staff/dentist/dentistProfile/DentistProfile";
function Content() {
    return (
    <div className={styles.content}>
      <Header />
      <Routes>
        <Route path={"/staff"} element={<DentistList />} />
        <Route path={"/staff/admins"} element={<AdminList />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/calendar" element={<Journal />} />
        <Route path="/services" element={<ServiceList/>} />
        <Route path="/" element={<Calendar />} />
        <Route path={"/patients/profile/:id"} element={<Profile />} />
        <Route path={"/patients/profile/visit/:id"} element={<Visit />} />
        <Route path={"/patients/profile/formula/:id"} element={<Formul />} />
        <Route path={"/staff/admins/adminProfile/:id"} element={<AdminProfile/>} />
        <Route path={"/staff/doctors/doctorProfile/:id"} element={<DentistProfile />} />
      </Routes>
    </div>
  );
}

export default Content;
