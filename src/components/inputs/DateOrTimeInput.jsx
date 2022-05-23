import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DatePicker, LocalizationProvider } from "@mui/lab";

export default function DateOrTimeInput({ required, formik, name, label, type }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TextField
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
        fullWidth
        id="date"
        label={label}
        type={type}
        required={required}
        error={!!formik?.errors[name] && formik.touched[name]}
        helperText={
          formik.errors[name] && formik.touched[name] ? (
            <span>{formik.errors[name]}</span>
          ) : null
        }
        onBlur={formik.handleBlur}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </LocalizationProvider>
  );
}
