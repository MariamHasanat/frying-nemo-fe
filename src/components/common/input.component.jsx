import React from 'react';
import './input.css';


/**
 * Render as input element
 * @param {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
 * label?: string;
 * }} props
 */
const Input = props => {

  const { label, ...inputProps } = props;

  return (

    <div className="input-group">
      {label ? <label>{label}</label> : null}
      <input {...inputProps} />
    </div>

  );

};
export default Input ;