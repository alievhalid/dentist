import React from "react";
import { Button, Grid } from "@mui/material";
import TextInput from "../../inputs/TextInput";
import SelectInput from "../../inputs/SelectInput";
import DateOrTimeInput from "../../inputs/DateOrTimeInput";
import NumberInput from "../../inputs/NumberInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import style from "./AddPatients.module.scss";
import { useDispatch } from "react-redux";
import {
  addClients,
  clientsEdit,
} from "../../../redux/patients/patientsReducer";

const AddPatients = ({ handleClose, item }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: item ? item.firstName : "",
      lastName: item ? item.lastName : "",
      fathersName: item ? item.fathersName : "",
      phoneNumber: item ? item.phoneNumber : "",
      secondPhoneNumber: item ? item.secondPhoneNumber : "",
      birthday: item ? item.birthday : "",
      email: item ? item.email : "",
      gender: item ? item.gender : "",
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
      birthday: Yup.date(),
      email: Yup.string().email("Введите валидный Email!"),
      gender: Yup.string().min(1).required("Обязательное поле!"),
    }),
    onSubmit: item
      ? (values) =>
          dispatch(
            clientsEdit(
              values.firstName,
              values.lastName,
              values.fathersName,
              values.phoneNumber,
              values.secondPhoneNumber,
              values.birthday,
              values.email,
              values.gender,
              item._id
            )
          )
      : (values) =>
          dispatch(
            addClients(
              values.firstName,
              values.lastName,
              values.fathersName,
              values.phoneNumber,
              values.secondPhoneNumber,
              values.birthday,
              values.email,
              values.gender
            )
          ),
  });
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
            <Button onClick={handleClose} type="submit" variant="contained" fullWidth size="large">
              Зарегистрировать врача
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddPatients;
