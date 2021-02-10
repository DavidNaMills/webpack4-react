import React from "react";
import classes from "./popup.module.scss";

const Popup = ({ children }) => {
  return (
    <div>
      <div className={classes.popup__overlay}>
        <div className={classes.popup__container}>
          <div>
            <button type="button">Close</button>
          </div>
          <div className={classes.popup__content}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
