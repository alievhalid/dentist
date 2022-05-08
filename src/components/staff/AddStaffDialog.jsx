import React, { useState } from "react";
import { Dialog } from "@mui/material";
import styles from "./staff.module.scss";
import AddDentist from "./dentist/AddDentist";
import AddAdmin from "./add-admin/AddAdmin";

const AddStaffDialog = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [staff, setStaff] = useState(true);
  const [admin, setAdmin] = useState(false);
  const handleStaff = () => {
    setStaff(true);
    setAdmin(false);
  };
  const handleAdmin = () => {
    setAdmin(true);
    setStaff(false);
  };

  return (
    <>
      <div onClick={handleClickOpen}>Добавить</div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog"
        maxWidth={"md"}
        fullWidth
      >
        <div className={styles.title}>
          <h2 onClick={handleStaff} className={staff ? styles.active : ""}>
            Добавить доктора
          </h2>
          <h2 onClick={handleAdmin} className={admin ? styles.active : ""}>
            Добавить администратора
          </h2>
        </div>
        {staff ? (
          <AddDentist setOpen={setOpen} handleClose={handleClose} />
        ) : (
          <AddAdmin />
        )}
      </Dialog>
    </>
  );
};

export default AddStaffDialog;
