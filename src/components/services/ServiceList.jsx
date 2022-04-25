import React, {useEffect, useState} from 'react';
import ArticleIcon from '@mui/icons-material/Article';
import {
    Button, ButtonGroup,
    Dialog,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead, TablePagination,
    TableRow,
    TextField
} from "@mui/material";
import AddServices from "./AddServices";
import {useDispatch, useSelector} from "react-redux";
import { loadServices } from "../../redux/service/serviceReducer";
import Service from "./Service";
import ServicePreloader from "./ServicePreloader";


const ServiceList = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const dispatch =useDispatch();
    const state = useSelector(state => state.serviceReducer);
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

    useEffect(()=>{
        dispatch(loadServices())
    },[])

    return (
         <Paper elevation={1}>
            <TableContainer  >
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell  sx={{padding: "14px"}} >
                                <TextField sx={{width: "300px"}} size="small"  type="text" placeholder="Поиск по таблице" />
                            </TableCell>
                            <TableCell  sx={{padding: "14px"}}>
                                <span>Список услуг</span>
                            </TableCell>

                            <TableCell  sx={{padding: "14px"}} align={"center"}>
                                <Button variant="contained" startIcon={<ArticleIcon/>} onClick={handleClickOpen}>
                                    <span>Добавить</span>
                                </Button>
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="form-dialog"
                                    maxWidth={"sm"}
                                    fullWidth
                                >
                                    <AddServices addLoading={addLoading}  setOpen={setOpen} handleClose={handleClose} />
                                </Dialog>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{padding: "14px"}}>
                                Название
                            </TableCell>
                            <TableCell sx={{padding: "14px"}}>
                                <span>Стоимость</span>
                            </TableCell>
                            <TableCell align="center" sx={{padding: "14px"}}>
                                <span>Действия</span>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loading?
                            <ServicePreloader/> :
                                services.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((item) => {
                                    return (
                                        <Service key={item._id} item={item}/>
                                    );
                                })
                        }

                    </TableBody>
                </Table>
            </TableContainer>
             <TablePagination
                 rowsPerPageOptions={[5, 10, 25]}
                 component="div"
                 count={services.length}
                 rowsPerPage={rowsPerPage}
                 page={page}
                 onPageChange={handleChangePage}
                 onRowsPerPageChange={handleChangeRowsPerPage}
             />
        </Paper>
    );
};

export default ServiceList;