import React from "react";

const style = {
  border: "solid rgb(141, 165, 201) 1px",
  borderRadius: "5px",
  width: "200px",
  backgroundColor: "rgb(252, 253, 255)",
  display: "flex",
  flexDirection: "column",
  padding: "10px",
};

const Card = ({ children }) => {
  return <div style={style}>{children}</div>;
};

export default Card;
