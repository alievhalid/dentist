import React from 'react';
import style from "./journal.module.scss";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Note from "./Note";

const TableDentist = ({item, notes, patients}) => {
    const timeArray = [
        {time: "8:00"},
        {time: "9:00"},
        {time: "10:00"},
        {time: "11:00"},
        {time: "12:00"},
        {time: "13:00"},
        {time: "14:00"},
        {time: "15:00"},
        {time: "16:00"},
        {time: "17:00"},
        {time: "18:00"},
    ]
    return (
        <>
            <TableContainer className={style.table__doc}>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell align={"center"}>
                                {item.firstName} {item.lastName}
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {timeArray.map(time => {
                            return (
                                <TableRow key={time.time}>
                                    <TableCell  padding={"none"}>
                                        <Note patients={patients} notes={notes} doctor={item} time={time}/>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default TableDentist;