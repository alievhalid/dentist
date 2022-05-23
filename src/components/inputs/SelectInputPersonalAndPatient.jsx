import React from "react";
import {
  MenuItem,
  TextField,
} from "@mui/material";

const SelectInput = ({ name, formik, array, label, multiple, required }) => {
  return (
    <>
      <TextField
        select
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
        label={label}
        required={required}
        fullWidth
        error={!!formik?.errors[name] && formik.touched[name]}
        helperText={
          formik.errors[name] && formik.touched[name] ? (
            <span>{formik.errors[name]}</span>
          ) : null
        }
        onBlur={formik.handleBlur}
        SelectProps={{
          multiple: multiple,
        }}
      >
        {array.map((item) => (
          <MenuItem key={item._id} value={item._id}>
              {`${item.firstName} ${item.lastName} ${item.fathersName}`}
          </MenuItem>
        ))}
      </TextField>
      {/*<FormControl fullWidth>*/}
      {/*    <InputLabel id="demo-simple-select-label">{label}</InputLabel>*/}
      {/*    <Select*/}
      {/*        required={required}*/}
      {/*        name={name}*/}
      {/*        multiple={multiple}*/}
      {/*        labelId="demo-simple-select-label"*/}
      {/*        id="demo-simple-select"*/}
      {/*        value={formik.values[name]}*/}
      {/*        label={label}*/}
      {/*        onChange={formik.handleChange}*/}
      {/*        error={!!formik?.errors[name] && formik.touched[name]}*/}
      {/*        onBlur={formik.handleBlur}*/}
      {/*    >*/}
      {/*        {array.map(item => (*/}
      {/*            <MenuItem key={item.title} value={item.title}>{item.title}</MenuItem>*/}
      {/*        ))}*/}
      {/*    </Select>*/}
      {/*    <FormHelperText >{formik.errors[name] && formik.touched[name] ? <span>{formik.errors[name]}</span> : null}</FormHelperText>*/}
      {/*</FormControl>*/}
    </>
  );
};

export default SelectInput;
