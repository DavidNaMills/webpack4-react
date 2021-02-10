import React from "react";
import { CheckboxWithLabel } from "formik-material-ui";
import { Field } from "formik";

const CustomCheckbox = ({ value, label, name, ...rest }) => {
  return (
    <Field
      component={CheckboxWithLabel}
      type="checkbox"
      name={name}
      Label={{ label }}
      {...rest}
    />
  );
};

export default CustomCheckbox;
