import React from "react";
import styles from "./AddPatients.module.scss";
import { Button, Grid } from "@mui/material";
import TextInput from "../inputs/TextInput";
import DateInput from "../inputs/DateInput";
import SelectInput from "../inputs/SelectInput";
import NumberInput from "../inputs/NumberInput";
import * as Yup from "yup";
import { useFormik } from "formik";
function AddPatients({ handleClose }) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      fathersName: "",
      phoneNumber: "",
      date: "",
      email: "",
      gender: "",
      login: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, "Минимум 3 символа!")
        .required("Обязательное поле!"),
      lastName: Yup.string()
        .min(3, "Минимум 3 символа!")
        .required("Обязательное поле!"),
      fathersName: Yup.string().min(3, "Минимум 3 символа!"),
      phoneNumber: Yup.string()
        .required("Обязательное поле!")
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "Не валидный номер"
        ),
      date: Yup.date(),
      email: Yup.string().email("Введите валидный Email!"),
      login: Yup.string()
        .matches(/^[a-z0-9_-]{3,16}$/, "Только латинские буквы и цыфры")
        .min(6, "Минимум 6 символов")
        .required("Обязательное поле!"),
    }),
    onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
  });
  const selectGender = [{ title: "муж" }, { title: "жен" }];
  return (
    <div className={styles.wrap}>
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
            name="login"
            formik={formik}
            label="Логин"
            type="login"
            required={true}
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
        <Grid item xs={3}>
          <SelectInput
            required={true}
            formik={formik}
            name="gender"
            multiple={false}
            array={selectGender}
            label="Пол"
          />
        </Grid>
        <Grid item xs={4}>
          <DateInput
            formik={formik}
            name="date"
            required={true}
            label="Дата рождения"
          />
        </Grid>
        <Grid item xs={4}>
          <NumberInput
            formik={formik}
            name="phoneNumber"
            required={true}
            label="Номер телефона"
            type="tel"
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
          <Button type="submit" variant="contained" fullWidth size="large">
            Зарегистрировать врача
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default AddPatients;
