import React from 'react';
import {useFormik} from "formik";
import * as Yup from "yup";
import {Button, Grid} from "@mui/material";
import TextInput from "../inputs/TextInput";
import styles from "./add-sevices.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {createService, editService} from "../../redux/service/serviceReducer";

const AddServices = ({handleClose, item}) => {
    const addLoading = useSelector(state => state.serviceReducer.addLoading);
    const dispatch =useDispatch();
    const formik = useFormik({
        initialValues: {
            service: item? item.service : "",
            price: item? item.price : 0,
        },
        validationSchema: Yup.object({
            service: Yup.string()
                .required("Обязательное поле!"),
            price: Yup.number("Обязательное поле")
                .required("Обязательное поле!"),

        }),
        onSubmit: item?
            (values) => dispatch(editService(item._id, values.service, values.price))
            :
            (values) => dispatch(createService(values.service, values.price))
    });

     return (
        <div className={styles.wrap}>
            <form onSubmit={formik.handleSubmit}>
                <h3>Добавление услуги</h3>
                <div>
                    <Grid container spacing={{ md: 2 }} columns={12}>
                        <Grid item xs={12}>
                        </Grid>
                        <Grid item xs={8}>
                            <TextInput
                                formik={formik}
                                name='service'
                                label='Название услуги'
                                type='text'
                            />
                        </Grid>
                        <Grid item xs={4}  >
                            <TextInput
                                name='price'
                                label='Цена'
                                formik={formik}
                                type='number'
                            />
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
                        <Grid item xs={6}  >
                            <Button
                                disabled={!formik.values.service}
                                fullWidth
                                type='submit'
                                variant="contained"
                                color="primary"
                                size="large"
                                onClick={handleClose}
                            >
                                {item? "Сохранить изменения" +
                                    "" : "Добавить"}
                            </Button>
                    </Grid>
                    </Grid>
                </div>
            </form>
        </div>
    );
};

export default AddServices;