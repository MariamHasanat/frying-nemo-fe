import React from "react";
import './input.component.css';
/**
 * 
 * @param {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
 * {label?:string}} props 
 * @returns 
 */
const Input = (props) => {

  const { label, ...inputProps } = props;
  return (
    <div className="item-input">
      {
        label ? (
          <div>

          <label>{label} &nbsp;
            {inputProps.required ? <span>*</span> : null}
          </label>
          </div>
        )
          : null
      }
      <input {...inputProps} />
    </div>
  );
};

export default Input;