import React, {useState} from 'react';
import {FormControl, Icon, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";

const PasswordInput = ({formik, name, label, required}) => {

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <TextField
                required={required}
                fullWidth
                label={label}
                type={showPassword ? 'text' : 'password'}
                name={name}
                value={formik.values[name]}
                onChange={formik.handleChange}
                error={!!formik?.errors[name] && formik.touched[name]}
                helperText={formik.errors[name] && formik.touched[name] ? <span>{formik.errors[name]}</span> : null}
                onBlur={formik.handleBlur}
                InputProps={{
                    endAdornment: <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>,
                }}
                variant="outlined"
            />
        </>
    );
};

export default PasswordInput;