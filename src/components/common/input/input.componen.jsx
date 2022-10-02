import React from "react";
import './input.component.css'
/**
 * 
 * @param {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
 * {label?:string}} props 
 * @returns 
 */
const Input = (props) => {

  const { label, ...inputProps } = props;
  return (
    <div className="add-item-form">
      {label ? <label>{label}</label> : null}
      <input {...inputProps} />
    </div>
  );
};

export default Input;