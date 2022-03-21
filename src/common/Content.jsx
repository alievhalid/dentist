import React from 'react'
import Header from '../components/header/Header'
import Patients from '../components/patients/Patients'
import styles from "./content.module.scss"
function Content() {
  return (
    <div className={styles.content}>
        <Header />
        <Patients />
    </div>
  )
}

export default Content