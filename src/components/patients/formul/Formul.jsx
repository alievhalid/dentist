import React, { useState } from "react";
import Profile from "../profile/Profile";
import Dairy from "./dairy/Dairy";
import styles from "./formul.module.scss";
import Permament from "./permament/Permament";
import Jaws from "./jaws/Jaws";
function Formul() {
  const [dairy, setDairy] = useState(false);
  const [permament, setPermament] = useState(true);
  const [jaws, setJaws] = useState(false);
  const handleDairy = () => {
    setDairy(true);
    setJaws(false);
    setPermament(false);
  };
  const handlePermament = () => {
    setPermament(true);
    setJaws(false);
    setDairy(false);
  };
  const handleJaws = () => {
    setJaws(true);
    setPermament(false);
    setDairy(false);
  };
  return (
    <div>
      <Profile />
      <div className={styles.formula}>
        <div className={styles.wrap}>
          <div className={styles.nav}>
            <span>
              <div
                onClick={handlePermament}
                className={permament ? styles.active : ""}
              >
                Постоянные зубы
              </div>
            </span>
            <div onClick={handleDairy} className={dairy ? styles.active : ""}>
              Молочные зубы
            </div>
            <div onClick={handleJaws} className={jaws ? styles.active : ""}>
              Челюсти
            </div>
          </div>
          {dairy && <Dairy />}
          {permament && <Permament />}
          {jaws && <Jaws />}
        </div>
      </div>
    </div>
  );
}

export default Formul;
