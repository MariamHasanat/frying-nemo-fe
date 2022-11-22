import React from 'react';
import './input.css';

/**
 * Renders an input element.
 * @param {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
 *  label?: string;
 * }} props 
 */
const Input = props => {
  const { label, ...inputProps } = props;

  return (
    <div className="input-group"> 
      {label ? (<label>
        <span>
          {label}
        </span>
        
        {inputProps.required ? <span>*</span> : null}
        
      </label>) : null}
      <input {...inputProps} />
    </div>
  );
};

export default Input;