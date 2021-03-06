import React from "react";
import styles from "./dentist-profile.module.scss";
import PaidIcon from "@mui/icons-material/Paid";
import logo from "../../../../images/logo.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
function DentistProfile() {
  const param = useParams().id;
  const dentists = useSelector((state) =>
    state?.dentistsReducer.dentists.find((item) => {
      return param === item._id;
    })
  );
  const loadProfile = useSelector((state) => state.dentistsReducer.loading);
  console.log(dentists?.color);
  return (
    <div>
      {loadProfile ? null : (
        <div
          className={styles.profile}
          style={{ borderBottom: `solid 5px ${dentists?.color}` }}
        >
          <div className={styles.wrap}>
            <div className={styles.options}>
              <span>
                <NavLink to={"/staff"}>Доктора</NavLink>
              </span>
              /<span>{dentists?.lastName} </span>
              <span> {dentists?.firstName} </span>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles["info-one"]}>
              <div className={styles.image}>
                <img src={logo} alt="" />
              </div>
              <div className={styles["profile-info"]}>
                <div
                  className={styles.name}
                  style={{ color: `${dentists?.color}` }}
                >
                  <span>{dentists?.lastName} </span>
                  <span> {dentists?.firstName} </span>
                  <span>{dentists?.fathersName} </span>
                </div>
                <div className={styles.floor}>
                  <span>Почта</span>:{" "}
                  {dentists?.email ? dentists?.email : "не указано"}
                </div>
                <div className={styles.age}>
                  Лет: 21{" "}
                  <span>
                    ({dentists?.birthday ? dentists?.birthday : "не указано"})
                  </span>
                </div>
                <div className={styles.floor}>
                  <span>Логин</span>: {dentists?.login}
                </div>
                <div className={styles.floor}>
                  <span>Номер</span>: {dentists?.phoneNumber}
                </div>
                <div className={styles.floor}>
                  <span>Номер 2</span>:{" "}
                  {dentists?.secondPhoneNumber
                    ? dentists?.secondPhoneNumber
                    : "не указано"}
                </div>
              </div>
            </div>
            <div className={styles["info-two"]}>
              <div className={styles.card}>
                <span>Специальность</span>
                <div>
                  {dentists?.speciality.map((item, index) => {
                    return <div key={index}>{item},</div>;
                  })}
                </div>
              </div>
              <div className={styles.card}>
                <span>Зарплата</span>
                <div>{dentists?.salary ? dentists?.salary : "не указано"}</div>
              </div>
              <div className={styles.floor}>
                <span>Должность</span>: {dentists?.role}
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
                <div>
                  {dentists?.percent ? dentists?.percent + "%" : "не указано"}
                </div>
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
        </div>
      )}
    </div>
  );
}

export default DentistProfile;
