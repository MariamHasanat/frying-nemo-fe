import React from "react";
import './input.css';

const Input = props => {
  const { label, ...inputPropps } = props;

  return (
    <div className="input-group">
      {label ? <label>{label}</label> : null}
      <input {...inputPropps} />
    </div>
  );
};

export default Input;