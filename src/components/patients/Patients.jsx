import React, { useEffect } from "react";
import styles from "./patients.module.scss";
import { useDispatch } from "react-redux";
import { loadClients } from "../../redux/patients/patientsReducer";
import Patient from "./PatientList";
function Patients() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadClients());
  }, [dispatch]);
  return (
    <div className={styles.main}>
      <Patient />
    </div>
  );
}

export default Patients;
