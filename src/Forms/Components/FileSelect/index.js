import React from "react";
import { Field } from "formik";
import { SimpleFileUpload } from "formik-material-ui";

const FileSelect = ({ label, name, ...rest }) => {
  return (
    <Field component={SimpleFileUpload} name={name} label={label} {...rest} />
  );
};

export default FileSelect;
