
import React from 'react';
import './add.css';


/**
 * @param { React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {label?: string; 
 * }} props
 */
const Input = (props) => {
  const { label, ...inputProps } = props;

  return (
    <div className="potato">
      {label ? <label>{label}</label> : null}
        <input {...inputProps} />
      </div>
  );
};
export default Input;