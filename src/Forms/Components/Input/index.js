import React from "react";
import { Field } from "formik";
import TextField from "@material-ui/core/TextField";

const Input = ({
  type = "text",
  required = false,
  disabled = false,
  ...rest
}) => {
  return (
    <Field
      as={TextField}
      type={type}
      required={required}
      disabled={disabled}
      variant="outlined"
      {...rest}
    />
  );
};

export default Input;
