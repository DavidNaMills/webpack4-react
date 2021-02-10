import React from "react";

const style = {
  border: "solid rgb(10, 37, 51) 2px",
  borderRadius: "5px",
};

const TableContainer = ({ children }) => {
  return <div style={style}>{children}</div>;
};

export default TableContainer;
