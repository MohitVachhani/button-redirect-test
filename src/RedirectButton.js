// src/RedirectButton.js
import React from "react";

const RedirectButton = ({ url, buttonText }) => {
  const handleClick = () => {
    window.location.href = url;
  };

  return <button onClick={handleClick}>{buttonText}</button>;
};

export default RedirectButton;
