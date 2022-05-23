import React, {useEffect, useState} from 'react';
import {Button, Dialog, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import AddNote from "./AddNote";
import {useDispatch, useSelector} from "react-redux";
import {loadDentistList} from "../../redux/dentists/dentistsReducer";
import {loadClients} from "../../redux/patients/patientsReducer";
import {loadNotes} from "../../redux/Notes/notesReducer";
import style from "./journal.module.scss"
import TableDentist from "./TableDentist";

const Journal = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const dentists = state.dentistsReducer.dentists;
    const patients = state.patients.clients
    const notes = state.noteReducer.notes
    const length = dentists.length

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        dispatch(loadDentistList());
        dispatch(loadClients())
        dispatch(loadNotes())
    }, []);

    return (
        <Paper className={style.table} >
                    {/*<TableContainer className={style.table__time}>*/}
                    {/*    <Table>*/}
                    {/*        <TableHead>*/}
                    {/*            <TableRow>*/}
                    {/*                <TableCell width={150}  sx={{ padding: "14px" }} align={"left"}>*/}
                    {/*                    <Button*/}
                    {/*                        variant="contained"*/}
                    {/*                        startIcon={<ArticleIcon />}*/}
                    {/*                        onClick={handleClickOpen}*/}
                    {/*                    >*/}
                    {/*                        <span>Добавить</span>*/}
                    {/*                    </Button>*/}
                    {/*                    <Dialog*/}
                    {/*                        open={open}*/}
                    {/*                        onClose={handleClose}*/}
                    {/*                        aria-labelledby="form-dialog"*/}
                    {/*                        maxWidth={"md"}*/}
                    {/*                        fullWidth*/}
                    {/*                    >*/}
                    {/*                        <AddNote/>*/}
                    {/*                    </Dialog>*/}
                    {/*                </TableCell>*/}
                    {/*            </TableRow>*/}
                    {/*        </TableHead>*/}
                    {/*        <TableBody>*/}
                    {/*                {timeArray.map(item => {*/}
                    {/*                    return (*/}
                    {/*                        <TableRow key={item.time}>*/}
                    {/*                            <TableCell align={"center"} >*/}
                    {/*                                {item.time}*/}
                    {/*                            </TableCell>*/}
                    {/*                        </TableRow>*/}
                    {/*                    )*/}
                    {/*                })}*/}
                    {/*        </TableBody>*/}
                    {/*    </Table>*/}
                    {/*</TableContainer>*/}
                    {
                        dentists.map(item => {
                            return (
                                <TableDentist  patients={patients}  notes={notes} key={item._id} item={item}/>
                            )
                        })
                    }
        </Paper>
    );
};

export default Journal;