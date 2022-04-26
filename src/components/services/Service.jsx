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
import AddServices from "./AddServices";
import {
  deleteService,
  loadServices,
} from "../../redux/service/serviceReducer";
import { useDispatch, useSelector } from "react-redux";

const Service = ({ item }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleDelete = (id) => {
    dispatch(deleteService(id));
  };

  return (
    <TableRow key={item._id}>
      <TableCell size="small" align="left">
        {item.service}
      </TableCell>
      <TableCell size="small" align="left">
        {item.price}₽
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
            maxWidth={"sm"}
            fullWidth
          >
            <AddServices
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

export default Service;
