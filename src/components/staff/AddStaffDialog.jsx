import React, { useState } from "react";
import { Dialog } from "@mui/material";
import styles from "./staff.module.scss";
import AddDentist from "./dentist/AddDentist";
import AddAdmin from "../../redux/admin/adminReducer";

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
        <AddDentist />
        {/* {staff ? (
          <AddDentist setOpen={setOpen} handleClose={handleClose} />
        ) : (
          <AddAdmin />
        )} */}
      </Dialog>
    </>
  );
};

export default AddStaffDialog;
