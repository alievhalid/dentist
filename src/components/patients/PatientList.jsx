import React, { useState } from "react";
import ArticleIcon from "@mui/icons-material/Article";
import styles from "./patients.module.scss";
import {
  Button,
  ButtonGroup,
  Dialog,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddPatients from "./AddPatients";
import Patient from "./Patient";
function PatientList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.serviceReducer);
  const services = state.services;
  const loading = state.loading;
  const addLoading = state.addLoading;

  const [open, setOpen] = useState(false);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const patients = useSelector((state) => state.patients.clients);
  const load = useSelector((state) => state.patients.loading);
  return (
    <Paper elevation={1}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ padding: "14px" }}>
                <TextField
                  sx={{ width: "300px" }}
                  size="small"
                  type="text"
                  placeholder="Поиск по таблице"
                />
              </TableCell>
              <TableCell sx={{ padding: "14px", }} align={"right"}>
                <Button
                  variant="contained"
                  startIcon={<ArticleIcon />}
                  onClick={handleClickOpen}
                >
                  <span>Добавить</span>
                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="form-dialog"
                  maxWidth={"md"}
                  fullWidth
                >
                  <div className={styles.title}>
                    <h2>Добавить пациента</h2>
                    <AddPatients setOpen={setOpen} handleClose={handleClose} />
                  </div>
                </Dialog>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow>
              <TableCell sx={{ padding: "14px", width: "50px"}}>
                <span>ID</span>
              </TableCell>
              <TableCell sx={{ padding: "14px" }}>
                <span>ФИО</span>
              </TableCell>
              <TableCell sx={{ padding: "14px" }}>
                <span>Телефон</span>
              </TableCell>
              <TableCell sx={{ padding: "14px" }}>
                <span>Карточка</span>
              </TableCell>
              <TableCell sx={{ padding: "14px" }}>
                <span>Возраст</span>
              </TableCell>
              <TableCell sx={{ padding: "14px" }}>
                <span>Депозит</span>
              </TableCell>
              <TableCell align="center" sx={{ padding: "14px" }}>
                <span>Состояние</span>
              </TableCell>
              <TableCell align="center" sx={{ padding: "14px" }}>
                <span>Действия</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {load
              ? "ads"
              : patients
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((item, index) => {
                    return <Patient key={item._id} item={item} id={index} />;
                  })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={patients.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default PatientList;
