import React from "react";
import { TextField } from "@mui/material";

const TextInput = ({ id, name, formik, label, type, required }) => {
  return (
    <>
      <TextField
        value={formik.values[name]}
        onChange={formik.handleChange}
        name={name}
        required={required}
        type={type}
        fullWidth
        label={label}
        error={!!formik?.errors[name] && formik.touched[name]}
        helperText={
          formik.errors[name] && formik.touched[name] ? (
            <span>{formik.errors[name]}</span>
          ) : null
        }
        onBlur={formik.handleBlur}
      />
    </>
  );
};

export default TextInput;
