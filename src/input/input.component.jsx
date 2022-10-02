import React from "react";
import './input.css';

/**
 * Render an input element.
 * @param {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
 * label?:string;
 * }} props
 */

/**
 * 
 */
const Input = props => {
  const {label, ...inputProps} = props;

  return (
    <div className="container">
      {label ? <label>{label}</label> : null}
      <input className="input-group" {...inputProps}/>
    </div>
  );
};

export default Input;

