import React from "react";
import Select from "react-select";

const SelectionBar = ({ options, onChange }) => {
  return (
    <div>
      <Select options={options} onChange={onChange} />
    </div>
  );
};

export default SelectionBar;
