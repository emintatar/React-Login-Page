import React from "react";
import "./Input.css";

const Input = ({ type, placeholder, onChange, name }) => {
  return (
    <input
      name={name}
      className="input"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
