import React from "react";
import styles from "./patientsModal.module.scss";
function PatientsModal() {
  return (
    <div className={styles.modal}>
      <div className={styles.wrap}>
        <div className={styles.patient}>Пациент</div>
        <nav>
          <li>
            <span>Фамилия</span>
            <input type="text" placeholder="Фамилия" />
          </li>
          <li>
            <span>Имя</span>
            <input type="text" placeholder="Имя" />
          </li>
          <li>
            <span>Отчество</span>
            <input type="text" placeholder="Отчество" />
          </li>
          <li>
            <span>Пол</span>
            <select name="" id="">
              <option value="">Мужчина</option>
              <option value="">Женщина</option>
            </select>
          </li>
          <li>
            <span>Карточка</span>
            <input type="text" placeholder="Карточка" />
          </li>
          <li>
            <span>Телефон</span>
            <input type="text" placeholder="Телефон" />
          </li>
        </nav>
        <div className={styles.add}>
          <div>Отмена</div>
          <span>
            <div>Добавить</div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default PatientsModal;
