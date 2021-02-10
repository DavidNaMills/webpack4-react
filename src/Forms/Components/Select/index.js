import React from "react";
import RSelect from "react-select";
import { Field } from "formik";

// TODO: MAKE ANIMATED

const colourStyles = {
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? "#999999" : "#4ff2f7",
      color: "#333333",
    };
  },
  menu: (base) => ({
    ...base,
    zIndex: 100,
  }),
};

const Select = ({ options, name, label, isMulti = false, ...rest }) => {
  const onChange = (option, field, form) => {
    form.setFieldValue(
      field.name,
      isMulti ? option.map((item) => item.value) : option.value
    );
  };

  const getValue = (field) => {
    if (options) {
      return isMulti && field.value
        ? options.filter((option) => field.value.indexOf(option.value) >= 0)
        : options.find((option) => option.value === field.value);
    }
    return isMulti ? [] : "";
  };

  return (
    <Field
      component={({ field, form }) => (
        <RSelect
          isMulti={isMulti}
          options={options}
          value={getValue(field)}
          onChange={(option) => onChange(option, field, form)}
          onBlur={field.onBlur}
          styles={colourStyles}
          placeholder={label}
          {...rest}
        />
      )}
      Label={{ label }}
      name={name}
    />
  );
};

export default Select;
