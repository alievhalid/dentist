import React, {useState} from 'react';
import {TextField} from "@mui/material";

const NumberInput = ({formik, label, required, name}) => {

    return (
        <>
            <TextField
                name={name}
                value={formik.values[name].slice(0, 11)}
                onChange={formik.handleChange}
                required={required}
                variant={"outlined"}
                fullWidth
                label={label}
                error={!!formik?.errors[name] && formik.touched[name]}
                helperText={formik.errors[name] && formik.touched[name] ? <span>{formik.errors[name]}</span> : null}
                onBlur={formik.handleBlur}
            />
        </>
    );
};

export default NumberInput;