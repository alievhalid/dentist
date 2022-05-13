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
import { useDispatch, useSelector } from "react-redux";
import AddAdmin from "./AddAdmin";
import { deleteAdmin } from "../../../redux/admin/adminReducer";
import { NavLink } from "react-router-dom";

const Admins = ({ item }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleDelete = (id) => {
    dispatch(deleteAdmin(item._id));
  };
  const loading = useSelector((state) => state.admins);
  return (
    <TableRow>
      <TableCell size="small" align="left">
        <NavLink to={`/staff/admins/adminProfile/${item._id}`}>
          {item?.firstName} {item?.lastName}
        </NavLink>
      </TableCell>
      <TableCell size="small" align="left">
        {item?.email}
      </TableCell>
      <TableCell size="small" align="left">
        {item?.login}
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
            <AddAdmin
              addLoading={loading}
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

export default Admins;
