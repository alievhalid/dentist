import React from "react";
import styles from "./profile.module.scss";
import PaidIcon from "@mui/icons-material/Paid";
import EditIcon from "@mui/icons-material/Edit";
import AddTaskIcon from "@mui/icons-material/AddTask";
import logo from "../../../images/logo.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
function Profile() {
  const param = useParams().id;
  const profile = useSelector((state) =>
    state?.patients.clients.find((item) => {
      return param === item._id;
    })
  );
  const loadProfile = useSelector((state) => state.patients.loading);
  return (
    <div>
      {loadProfile ? (
        "загрузка"
      ) : (
        <div className={styles.profile}>
          <div className={styles.wrap}>
            <div className={styles.options}>
              <span>
                <NavLink to={"/patients"}>Пациенты</NavLink>
              </span>
              /<span>{profile?.lastName} </span>
              <span> {profile?.firstName} </span>
              <span>{profile?.fathersName} </span>
            </div>
            <nav>
              <div className={styles.icons}>
                <div>
                  <EditIcon />
                </div>
                <div>Редактировать</div>
              </div>
              <span> 
                <div className={styles.icons}>
                  <div>
                    <AddTaskIcon />
                  </div>
                  <div>Добавить</div>
                </div>
              </span>
            </nav>
          </div>
          <div className={styles.info}>
            <div className={styles["info-one"]}>
              <div className={styles.image}>
                <img src={logo} alt="" />
              </div>
              <div className={styles["profile-info"]}>
                <div className={styles.name}>
                  <span>{profile?.lastName} </span>
                  <span> {profile?.firstName} </span>
                  <span>{profile?.fathersName} </span>
                </div>
                <div className={styles.activity}>
                  <span>Активность</span>: Новый
                </div>
                <div className={styles.floor}>Мужчина</div>
                <div className={styles.age}>
                  Лет: 21 <span>(27.01.2001)</span>
                </div>
                <div className={styles.number}>
                  +{profile?.phoneNumber}
                  <LocalPhoneIcon />
                </div>
              </div>
            </div>
            <div className={styles["info-two"]}>
              <div className={styles.card}>
                <span>Номер карточки</span>
                <div>1</div>
              </div>
              <div className={styles.card}>
                <span>статус</span>
                <div>Первичный прием</div>
              </div>
              <div className={styles.card}>
                <span>Лечащий врач</span>
                <div>-</div>
              </div>
            </div>
            <div className={styles["info-three"]}>
              <div className={styles.deposit}>
                <span>Депозит</span>
                <div>
                  <PaidIcon />
                </div>
              </div>
              <div className={styles.payment}>
                <span>Всего оплачено</span>
                <div>-</div>
              </div>
              <div className={styles.discount}>
                <span>Скидка</span>
                <div>0%</div>
              </div>
            </div>
            <div className={styles["info-four"]}>
              <div className={styles.visit}>
                <span>Последний визит</span>
                <div>-</div>
              </div>
              <div className={styles.visit}>
                <span>Следующий визит</span>
                <div>-</div>
              </div>
              <div className={styles.visit}>
                <span>Долг</span>
                <div>-</div>
              </div>
            </div>
          </div>
          <div className={styles.filters}>
            <div className={styles.nav}>
              <NavLink to={`/patients/profile/visit/${param}`}>
                {({ isActive }) => (
                  <div className={isActive ? styles.active : ""}>Визиты</div>
                )}
              </NavLink>
              <NavLink to={`/patients/profile/formula/${param}`}>
                {({ isActive }) => (
                  <div className={isActive ? styles.active : ""}>Формула</div>
                )}
              </NavLink>
              <div>Оплаты</div>
              <div>Депозит</div>
              <div>Семейный счет</div>
              <div>План лечения</div>
              <div>Снимки</div>
              <div>Примечания</div>
              <div>Документы</div>
              <div>Персоналные данные</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
