import React from "react";

const style = {
  borderBottom: "solid rgb(80, 121, 143) 1px",
  display: "flex",
};

const Row = ({ children }) => {
  return <div style={style}>{children}</div>;
};

export default Row;
