import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Dialog,
  TableCell,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { clientsDelete } from "../../redux/patients/patientsReducer";
import { NavLink } from "react-router-dom";
import AddPatients from "./add-patients/AddPatients";
import styles from "./patients.module.scss";
function PatientsList({ item, id, index }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleDelete = (id) => {
    dispatch(clientsDelete(id));
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <TableRow key={item._id}>
      <TableCell size="small" align="left">
        {index + 1}
      </TableCell>
      <TableCell size="small" align="left">
        <NavLink to={`/patients/profile/${item._id}`}>
          {item.lastName + " " + item.firstName}
        </NavLink>
      </TableCell>
      <TableCell size="small" align="left">
        {item.phoneNumber}
      </TableCell>
      <TableCell size="small" align="left">
        {item.email}
      </TableCell>
      <TableCell size="small" align="left">
        {item.birthday}
      </TableCell>
      <TableCell size="small" align="left">
        -
      </TableCell>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog"
        maxWidth={"md"}
        fullWidth
      >
        <div className={styles.title}>
          <h2>Редактировать пациента</h2>
          <AddPatients item={item} setOpen={setOpen} handleClose={handleClose} />
        </div>
      </Dialog>
      <TableCell size="small" align="center">
        <ButtonGroup
          size="small"
          variant="outlined"
          aria-label="outlined primary button group"
        >
          <Button onClick={handleClickOpen}>
            <EditIcon />
          </Button>
          <Button onClick={() => handleDelete(item._id)} color="error">
            <DeleteIcon />
          </Button>
        </ButtonGroup>
      </TableCell>
    </TableRow>
  );
}

export default PatientsList;
