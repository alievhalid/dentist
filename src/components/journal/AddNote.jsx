import React, {useEffect, useState} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {Button, Dialog, Grid, Input, Paper, TextField} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {createService, editService} from "../../redux/service/serviceReducer";
import SelectInput from "../inputs/SelectInput";
import SelectInputPersonalAndPatient from "../inputs/SelectInputPersonalAndPatient";
import {loadDentistList} from "../../redux/dentists/dentistsReducer";
import DateOrTimeInput from "../inputs/DateOrTimeInput";
import TextInput from "../inputs/TextInput";
import ArticleIcon from "@mui/icons-material/Article";
import styles from "../patients/patients.module.scss";
import AddPatients from "../patients/add-patients/AddPatients";
import {createNote} from "../../redux/Notes/notesReducer";

const AddNote = ({ item }) => {
    const state = useSelector((state) => state);
    const dentists = state.dentistsReducer.dentists;
    const patients = state.patients.clients
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            recordType: "",
            doctor: "",
            visitDate: "",
            visitTime: "12:00",
            duration: "30",
            patient: "",
            status: ""
        },
        validationSchema: Yup.object({
            recordType: Yup.string().required("Обязательное поле!"),
            // doctor: Yup.number("Обязательное поле").required("Обязательное поле!"),
        }),
        onSubmit: (values) => dispatch(
            createNote(
                values.recordType,
                values.doctor,
                values.visitDate,
                values.visitTime,
                values.duration,
                values.patient,
                values.status
            )
        ),
    });

    const recordTypeArray = [
        {title: "Лечение"},
        {title: "Консультация"},
        {title: "Диагностика"},
        {title: "Осмотр"},
        {title: "Санация"},
        {title: "Заблокировать"}
    ]
    const status = [
        {title: "Не подтверждена"},
        {title: "Подтверждена"},
        {title: "Пришел"},
        {title: "В кресле"},
        {title: "Не пришел"},
    ]
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        dispatch(loadDentistList());
    }, []);

    return (
        <Paper style={{padding: "20px"}} elevation={1} >
            <form onSubmit={formik.handleSubmit}>
                <h3>Добавление услуги</h3>
                <div>
                    <Grid container spacing={{ md: 2 }} columns={12}>
                        <Grid item xs={6}>
                            <SelectInput
                                array={recordTypeArray}
                                name="recordType"
                                formik={formik}
                                label="Тип записи"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <SelectInputPersonalAndPatient
                                array={dentists}
                                name="doctor"
                                formik={formik}
                                label="Доктор"
                                multiple={false}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <DateOrTimeInput
                                formik={formik}
                                name="visitDate"
                                type="date"
                                required={true}
                                label="Дата Визита"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <DateOrTimeInput
                                formik={formik}
                                name="visitTime"
                                type="time"
                                required={true}
                                label="Дата Визита"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextInput
                                formik={formik}
                                name="duration"
                                type="number"
                                step="30"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <SelectInput
                                array={status}
                                name="status"
                                formik={formik}
                                label="Статус"
                                multiple={false}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <SelectInputPersonalAndPatient
                                array={patients}
                                name="patient"
                                formik={formik}
                                label="Пациент"
                                multiple={false}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Button
                                fullWidth
                                size="large"
                                variant="contained"
                                startIcon={<ArticleIcon />}
                                onClick={handleClickOpen}
                            >
                                <span>Добавить пациента</span>
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
                        </Grid>

                        <Grid item xs={6}>
                            <Button
                                variant="outlined"
                                fullWidth
                                size="large"
                                onClick={handleClose}
                            >
                                Отмена
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                // disabled={!formik.values.service}
                                fullWidth
                                type="submit"
                                variant="contained"
                                color="primary"
                                size="large"
                                onClick={handleClose}
                            >
                                Добавить Запись в журнал
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </form>
        </Paper>
    );
};

export default AddNote;
