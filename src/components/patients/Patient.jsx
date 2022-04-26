import React, {useState} from 'react'
import {
  Button,
  ButtonGroup,
  Dialog,
  TableCell,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
function PatientsList({item, id}) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleDelete = (id) => {
    // dispatch(deleteService(id));
  };
  return (
    <TableRow key={item._id}>
      <TableCell size="small" align="left">
        {id + 1}
      </TableCell>
      <TableCell size="small" align="left">
        {item.lastName + " " + item.firstName}
      </TableCell>
      <TableCell size="small" align="left">
        {item.phoneNumber}
      </TableCell>
      <TableCell size="small" align="left">
        -
      </TableCell>
      <TableCell size="small" align="left">
        -
      </TableCell>
      <TableCell size="small" align="left">
        -
      </TableCell>
      <TableCell size="small" align="left">
        -
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
          {/* <Dialog
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
          </Dialog> */}
          <Button onClick={() => handleDelete(item._id)} color="error">
            <DeleteIcon />{" "}
          </Button>
        </ButtonGroup>
      </TableCell>
    </TableRow>
  )
}

export default PatientsList