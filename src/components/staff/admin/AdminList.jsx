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
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import AddAdmin from "./AddAdmin";
import Admins from "./Admins";
const AdminList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = useState(false);
  const admins = useSelector((state) => state.admins.admin);
  const loading = useSelector((state) => state.admins.loading);
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
                <NavLink to="/staff">Доктора </NavLink>
                <NavLink to="/staff/admins">Администраторы</NavLink>
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
                  <AddAdmin
                    item={admins}
                    addLoading={loading}
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
              <TableCell sx={{ padding: "14px" }}>Login</TableCell>
              <TableCell align="center" sx={{ padding: "14px" }}>
                <span>Действия</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading
              ? null
              : admins
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((item, index) => {
                    return <Admins key={index} item={item} />;
                  })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={admins.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default AdminList;
