import React, { useState } from "react";
import {
  Button,
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
import ArticleIcon from "@mui/icons-material/Article";
import TablePreloader from "../../preloaders/TablePreloader";
import { useSelector } from "react-redux";
import Dentist from "./Dentist";
import AddDentist from "./AddDentist";
import { NavLink } from "react-router-dom";

const DentistList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const state = useSelector((state) => state.dentistsReducer);
  const dentists = state.dentists;
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
  return (
    <Paper elevation={1}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell width={300} sx={{ padding: "14px" }}>
                <NavLink to="/staff">Доктора</NavLink>
                <NavLink to="/staff/admins"> Администраторы</NavLink>
              </TableCell>
              <TableCell width={300} sx={{ padding: "14px" }}></TableCell>
              <TableCell width={300} sx={{ padding: "14px" }}>
                <TextField
                  sx={{ width: "300px" }}
                  size="small"
                  type="text"
                  placeholder="Поиск по таблице"
                />
              </TableCell>

              <TableCell sx={{ padding: "14px" }} align={"center"}>
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
                  <AddDentist
                    addLoading={addLoading}
                    setOpen={setOpen}
                    handleClose={handleClose}
                  />
                </Dialog>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow>
              <TableCell sx={{ padding: "14px" }}>Имя</TableCell>
              <TableCell sx={{ padding: "14px" }}>Email</TableCell>
              <TableCell sx={{ padding: "14px" }}>Номер телефона</TableCell>
              <TableCell align="center" sx={{ padding: "14px" }}>
                <span>Действия</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TablePreloader />
            ) : (
              dentists
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item) => {
                  return <Dentist key={item._id} item={item} />;
                })
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={dentists.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default DentistList;
