import React from "react";
import styles from "./patients.module.scss";
import Patient from "./PatientList";
function Patients() {
  return (
    <div className={styles.main}>
      <Patient />
    </div>
  );
}

export default Patients;
