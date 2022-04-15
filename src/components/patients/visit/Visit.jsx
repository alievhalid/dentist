import React from "react";
import Profile from "../profile/Profile";
import styles from "./visit.module.scss";
function Visit() {
  return (
    <div>
      <Profile />
      <div className={styles.visit}>
        <div className={styles["add-btn"]}>Добавить</div>
        <div className={styles.recordings}>Записей:-</div>
        <div className={styles.filters}>
          <div className={styles.id}>id</div>
          <div>Визит</div>
          <div>Тип</div>
          <div>Статус</div>
          <div>Услуги</div>
          <div>Зубы</div>
          <div>Цена</div>
          <div>Действия</div>
        </div>
      </div>
    </div>
  );
}

export default Visit;
