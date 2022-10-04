import React from "react";
import './Input.css';

/**
 * 
 * @param {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
 *  label?: string;
 * }} props 
 * @returns 
 */
const Input = props => {
  const { label, ...inputProps } = props;

  return (
    <div>
      {label ?
       <label>
         <span> {label}</span> 
        { inputProps.required && <span>* </span>}
   </label>
        : null
      }

      <input {...inputProps} />

    </div>
  );
};
export default Input;