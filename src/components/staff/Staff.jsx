import React, { useState } from "react";
import styles from "./staff.module.scss";
import DentistList from "./dentist/DentistList";

function Staff() {

  return (
    <div className={styles.main}>
      <DentistList/>
    </div>
  );
}

export default Staff;
