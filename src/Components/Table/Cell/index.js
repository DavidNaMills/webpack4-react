import React from "react";

const style = {
  padding: "5px",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
};

const Cell = ({ children }) => {
  return <div style={style}>{children}</div>;
};

export default Cell;
