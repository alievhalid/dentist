import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Grid } from "@mui/material";
import TextInput from "../inputs/TextInput";
import styles from "./add-sevices.module.scss";

const AddServices = () => {
  const formik = useFormik({
    initialValues: {
      service: "",
      price: 0,
    },
    validationSchema: Yup.object({
      service: Yup.string().required("Обязательное поле!"),
      price: Yup.number("Обязательное поле").required("Обязательное поле!"),
    }),
    onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
  });
  return (
    <div className={styles.wrap}>
      <form onSubmit={formik.handleSubmit}>
        <h3>Добавление услуги</h3>
        <div>
          <Grid container spacing={{ md: 2 }} columns={12}>
            <Grid item xs={12}></Grid>
            <Grid item xs={8}>
              <TextInput
                formik={formik}
                name="service"
                label="Название услуги"
                type="text"
              />
            </Grid>
            <Grid item xs={4}>
              <TextInput
                name="price"
                label="Цена"
                formik={formik}
                type="number"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
              >
                Войти
              </Button>
            </Grid>
          </Grid>
        </div>
      </form>
    </div>
  );
};

export default AddServices;
