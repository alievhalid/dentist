import React from "react";
import { Button, Grid } from "@mui/material";
import TextInput from "../../inputs/TextInput";
import PasswordInput from "../../inputs/PasswordInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import styles from "./add-admin.module.scss";
import { addAdmin, editAdmin } from "../../../redux/admin/adminReducer";
import { useDispatch } from "react-redux";
function AddAdmin({ handleClose, item }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: item.firstName? item.firstName : "",
      lastName:  item.lastName? item.lastName : "",
      fathersName:  item.fathersName? item.fathersName : "",
      email:  item.email? item.email : "",
      login: item.login? item.login : "",
      password: "",
      role: "admin",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, "Минимум 3 символа!")
        .required("Обязательное поле!"),
      lastName: Yup.string()
        .min(3, "Минимум 3 символа!")
        .required("Обязательное поле!"),
      fathersName: Yup.string().min(3, "Минимум 3 символа!"),
      email: Yup.string().email("Введите валидный Email!"),
      login: Yup.string()
        .matches(/^[a-z0-9_-]{3,16}$/, "Только латинские буквы и цыфры")
        .min(6, "Минимум 6 символов")
        .required("Обязательное поле!"),
      password: Yup.string()
        .matches(/^[a-z0-9_-]{3,16}$/, "Только латинские буквы и цыфры")
        .min(8, "Минимум 8 символов!")
        .required("Обязательное поле"),
    }),
    onSubmit: item.firstName? (values) =>
    dispatch(
      editAdmin(
        values.firstName,
        values.lastName,
        values.fathersName,
        values.email,
        values.login,
        values.password,
        item._id
      )
    ) : (values) =>
    dispatch(
      addAdmin(
        values.firstName,
        values.lastName,
        values.fathersName,
        values.email,
        values.login,
        values.password,
        values.role
      )
    )
  });
  return (
    <div className={styles.wrap}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={{ md: 3 }} columns={12}>
          <Grid item xs={4}>
            <TextInput
              name="firstName"
              type="text"
              formik={formik}
              required={true}
              label="Имя"
            />
          </Grid>
          <Grid item xs={4}>
            <TextInput
              name="lastName"
              type="text"
              formik={formik}
              required={true}
              label="Фамилия"
            />
          </Grid>
          <Grid item xs={4}>
            <TextInput
              name="fathersName"
              type="text"
              formik={formik}
              label="Отчество"
            />
          </Grid>
          <Grid item xs={4}>
            <TextInput
              id={"email"}
              label="Email"
              formik={formik}
              name="email"
              type="email"
            />
          </Grid>
          <Grid item xs={4}>
            <TextInput
              name="login"
              formik={formik}
              label="Логин"
              type="login"
              required={true}
            />
          </Grid>
          <Grid item xs={4}>
            <PasswordInput
              name={"password"}
              formik={formik}
              label="Пароль"
              required={true}
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
          <Grid item xs={6}>
            <Button
              disabled={!formik.values.firstName}
              onClick={handleClose}
              type="submit"
              variant="contained"
              fullWidth
              size="large"
            >
              {item.firstName ? "Сохранить изменения" + "" : "Добавить"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default AddAdmin;
