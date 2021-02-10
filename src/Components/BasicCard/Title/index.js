import React from "react";

const style = {
  borderBottom: "solid 1px rgb(141, 165, 201)",
  display: "flex",
  justifyContent: "center",
  marginTop: "5px",
  marginBottom: "5px",
};

const Title = ({ title }) => {
  return (
    <div style={style}>
      <h3>{title}</h3>
    </div>
  );
};

export default Title;
