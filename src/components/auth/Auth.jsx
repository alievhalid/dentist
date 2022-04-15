import React from 'react';
import {Button, Grid, Paper} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import styles from './auth.module.scss';
import {auth} from "../../redux/auth/authReducer";
import {useFormik} from "formik";
import * as Yup from "yup";
import TextInput from "../inputs/TextInput";
import PasswordInput from "../inputs/PasswordInput";

const Auth = () => {
    const dispatch =useDispatch();
    const {error} = useSelector((state) =>  state.authReducer)

    const formik = useFormik({
        initialValues: {
            login: "",
            password: "",
        },
        validationSchema: Yup.object({
            login: Yup.string()
                .matches(/^[a-z0-9_-]{3,16}$/, "Только латинские буквы и цыфры")
                .required("Обязательное поле!"),
            password: Yup.string()
                .matches(/^[a-z0-9_-]{3,16}$/, "Только латинские буквы и цыфры")
                .required("Обязательное поле!"),

        }),
        onSubmit: (values) => dispatch(auth(values.login, values.password)),
    });

    return (
        <div className={styles.auth}>
            <Paper
                elevation={7}
                className={styles.box}>
                <form onSubmit={formik.handleSubmit}>
                    <h2 className={styles.h2} >АВТОРИЗАЦИЯ</h2>
                    <div>
                        <Grid container spacing={{ md: 2 }} columns={12}>
                            <Grid item xs={12}>
                                {error? <div className={styles.error}>{error}</div>: null}
                            </Grid>
                            <Grid item xs={12}>
                                <TextInput
                                    formik={formik}
                                    name='login'
                                    label='Логин'
                                />
                            </Grid>
                            <Grid item xs={12}  >
                                <PasswordInput
                                    name='password'
                                    label='Пароль'
                                    formik={formik}
                                />
                            </Grid>
                            <Grid item xs={12}  >
                                <Button
                                    fullWidth
                                    type='submit'
                                    variant="contained"
                                    color="primary"
                                >
                                    Войти
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </form>
            </Paper>
        </div>
    );
};

export default Auth;