import React from "react";
import Header from "../components/header/Header";
// import Patients from "../components/patients/Patients";
import Staff from "../components/staff/Staff";
import styles from "./content.module.scss";
function Content() {
  return (
    <div className={styles.content}>
      <Header />
      {/* <Patients /> */}
      <Staff />
    </div>
  );
}

export default Content;
