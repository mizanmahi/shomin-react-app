import React from "react";
import "./custom-button.style.scss";

const CustomButton = ({ children, isGoogleButton, inverted, ...otherButtonParams }) => {
  return (
    <button className={`${inverted ? 'inverted' : ''}${isGoogleButton ? 'google' : ''} custom-button`}{...otherButtonParams} >
      {children}
    </button>
  );
};
export default CustomButton;
