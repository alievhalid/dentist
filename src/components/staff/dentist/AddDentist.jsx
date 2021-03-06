import React from "react";
import { Button, Grid } from "@mui/material";
import TextInput from "../../inputs/TextInput";
import SelectInput from "../../inputs/SelectInput";
import DateOrTimeInput from "../../inputs/DateOrTimeInput";
import NumberInput from "../../inputs/NumberInput";
import PasswordInput from "../../inputs/PasswordInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import style from "./add-dentist.module.scss";
import {useDispatch} from "react-redux";
import {createDentist, editDentist} from "../../../redux/dentists/dentistsReducer";

const AddDentist = ({ handleClose, item }) => {
  console.log(item)
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: item? item.firstName : "",
      lastName: item? item.lastName : "",
      fathersName: item? item.fathersName : "",
      phoneNumber: item? item.phoneNumber : "",
      secondPhoneNumber: item? item.secondPhoneNumber : "",
      birthday: item? item.birthday : "",
      email: item? item.email : "",
      gender: item? item.gender : "",
      salary: item? item.salary : "",
      percent: item? item.percent : "",
      speciality: item? item.speciality : [],
      login: item? item.login : "",
      password: "",
      repeatPassword: "",
      color: item? item.service : "#65CCE6",
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
      repeatPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Пароли не совпадают!')
        .matches(/^[a-z0-9_-]{3,16}$/, "Только латинские буквы и цыфры")
        .min(8, "Минимум 8 символов!")
        .required("Обязательное поле"),
    }),
    onSubmit: item?
        (values) => dispatch(
            editDentist(
                values.firstName,
                values.lastName,
                values.fathersName,
                values.phoneNumber,
                values.secondPhoneNumber,
                values.birthday,
                values.email,
                values.gender,
                values.salary,
                values.percent,
                values.speciality,
                values.login,
                values.password,
                values.color,
                values.role
            ))
        :
        (values) => dispatch(
            createDentist(
                values.firstName,
                values.lastName,
                values.fathersName,
                values.phoneNumber,
                values.secondPhoneNumber,
                values.birthday,
                values.email,
                values.gender,
                values.salary,
                values.percent,
                values.speciality,
                values.login,
                values.password,
                values.color,
                values.role
            ))
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
            <DateOrTimeInput
              formik={formik}
              name="birthday"
              type="date"
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
          <Grid item xs={3}>
            <TextInput
                type="color"
                required={false}
                formik={formik}
                name="color"
                label="цвет"
            />
          </Grid>
          <Grid item xs={3}>
            <TextInput
              name="salary"
              formik={formik}
              label="Ставка"
              type="number"
            />
          </Grid>
          <Grid item xs={3}>
            <TextInput
              name="percent"
              formik={formik}
              label="Процент"
              type="number"
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
              onClick={handleClose}
            >
              Отмена
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                // onClick={formik.values.password.length >= 8 ?  handleClose : false}
            >
              {item ? "Сохранить изменения" : "Зарегистрировать врача"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddDentist;
