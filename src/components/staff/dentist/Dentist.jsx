import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Dialog,
  TableCell,
  TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { useDispatch } from "react-redux";

import AddDentist from "./AddDentist";
import {deleteDentist} from "../../../redux/dentists/dentistsReducer";

const Dentist = ({ item }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleDelete = (id) => {
    dispatch(deleteDentist(id));
  };

  return (
    <TableRow key={item._id}>
      <TableCell size="small" align="left">
        {item.firstName} {item.lastName} {item.fathersName}
      </TableCell>
      <TableCell size="small" align="left">
        {item.email}
      </TableCell>
      <TableCell size="small" align="left">
        {item.phoneNumber}
      </TableCell>
      <TableCell size="small" align="center">
        <ButtonGroup
          size="small"
          variant="outlined"
          aria-label="outlined primary button group"
        >
          <Button onClick={handleClickOpen}>
            <EditIcon />
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog"
            maxWidth={"md"}
            fullWidth
          >
            <AddDentist
              item={item}
              setOpen={setOpen}
              handleClose={handleClose}
            />
          </Dialog>

          <Button onClick={() => handleDelete(item._id)} color="error">
            <DeleteIcon />{" "}
          </Button>
        </ButtonGroup>
      </TableCell>
    </TableRow>
  );
};

export default Dentist;
