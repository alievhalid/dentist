import React from "react";
import { Button, Grid } from "@mui/material";
import TextInput from "../inputs/TextInput";
import SelectInput from "../inputs/SelectInput";
import DateInput from "../inputs/DateInput";
import NumberInput from "../inputs/NumberInput";
import PasswordInput from "../inputs/PasswordInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import style from "./add-staff.module.scss";

const AddStaff = ({ handleClose }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      fathersName: "",
      phoneNumber: "",
      secondPhoneNumber: "",
      date: "",
      email: "",
      gender: "",
      salary: "",
      percent: "",
      speciality: [],
      login: "",
      password: "",
      repeatPassword: "",
      role: "dentist"
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
      secondPhoneNumber: Yup.string().matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Не валидный номер"
      ),
      date: Yup.date(),
      email: Yup.string().email("Введите валидный Email!"),
      gender: Yup.string().min(1).required("Обязательное поле!"),
      speciality: Yup.array()
        .required("Обязательное поле!")
        .min(1, "выберите хотя бы одну специальность"),
      login: Yup.string()
        .matches(/^[a-z0-9_-]{3,16}$/, "Только латинские буквы и цыфры")
        .min(6, "Минимум 6 символов")
        .required("Обязательное поле!"),
      password: Yup.string()
        .matches(/^[a-z0-9_-]{3,16}$/, "Только латинские буквы и цыфры")
        .min(8, "Минимум 8 символов!")
        .required("Обязательное поле"),
      repeatPassword: Yup.string()
        .matches(/^[a-z0-9_-]{3,16}$/, "Только латинские буквы и цыфры")
        .min(8, "Минимум 8 символов!")
        .required("Обязательное поле"),
    }),
    onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
  });
  const specialties = [
    { title: "Терапевт" },
    { title: "Гигиенист" },
    { title: "Ортодонт" },
    { title: "Ортопед" },
    { title: "Хирург" },
    { title: "Детский врач" },
    { title: "Пародонтолог" },
    { title: "Стоматолог" },
    { title: "Косметолог" },
    { title: "Эндодонтист" },
    { title: "Массажист" },
    { title: "Хирург-имплантолог" },
    { title: "Ассистент" },
    { title: "Стоматолог-реставратор" },
    { title: "Анестезиолог" },
    { title: "Имплантолог" },
  ];
  const selectGender = [{ title: "муж" }, { title: "жен" }];

  return (
    <div className={style.wrap}>
      <h2>Добавить сотрудника</h2>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={{ md: 2 }} columns={12}>
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
            <NumberInput
              formik={formik}
              name="phoneNumber"
              required={true}
              label="Номер телефона"
              type="tel"
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
            <TextInput
              id={"email"}
              label="Email"
              formik={formik}
              name="email"
              type="email"
            />
          </Grid>
          <Grid item xs={4}>
            <NumberInput
              formik={formik}
              name="secondPhoneNumber"
              required={false}
              label={"Номер телефона 2"}
              type="tel"
            />
          </Grid>
          <Grid item xs={4}>
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
            <TextInput
              name="salary"
              formik={formik}
              label="Ставка"
              type="number"
            />
          </Grid>
          <Grid item xs={4}>
            <TextInput
              name="percent"
              formik={formik}
              label="Процент"
              type="number"
            />
          </Grid>
          <Grid item xs={8}>
            <SelectInput
              required={true}
              name="speciality"
              formik={formik}
              multiple={true}
              array={specialties}
              label="Специальность"
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
          <Grid item xs={4}>
            <PasswordInput
              name={"repeatPassword"}
              formik={formik}
              label="Повторите пароль"
              required={true}
            />
          </Grid>
          <Grid item xs={6}>
            <Button
                variant="outlined"
                fullWidth
                size="large"
                // onClick={handleClose}
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
      </form>
    </div>
  );
};

export default AddStaff;
