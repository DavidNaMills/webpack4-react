import React, { useMemo } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { Input, Checkbox, Select, FileSelect } from "./Components";

const errorStyle = {
  color: "red",
  border: "solid red 2px",
};

const FormBuilder = ({ config, handleSubmit, disable }) => {
  const { validation, initialValues, fields } = config;

  const theForm = fields.map((item) => {
    switch (item.type) {
      case "text":
      case "number":
        return (
          <Input
            required={false}
            disabled={false}
            key={item.name}
            {...item}
            helperText={<ErrorMessage name={item.name} />}
          />
        );
      case "file":
        return (
          <FileSelect key={item.name} name={item.name} label={item.label} />
        );
      case "checkbox":
        return <Checkbox {...item} key={item.name} />;
      case "select":
        return <Select key={item.name} isMulti={item.isMulti} {...item} />;
      default:
        return null;
    }
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={async (values, actions) => {
        try {
          await handleSubmit(values);
          actions.resetForm();
        } catch (err) {
          console.log("an error");
        }
      }}
    >
      {(isValid) => {
        return (
          <Form>
            {theForm}
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormBuilder;
