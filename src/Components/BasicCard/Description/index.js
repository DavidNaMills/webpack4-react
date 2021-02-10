import React from "react";

const style = {
  marginTop: "5px",
  marginBottom: "5px",
};

const Description = ({ text }) => {
  return (
    <div style={style}>
      <p>{text}</p>
    </div>
  );
};

export default Description;
