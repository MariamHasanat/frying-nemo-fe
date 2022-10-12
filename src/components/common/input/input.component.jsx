import './input.css';
import React from 'react';

/**
 * 
 * @param {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {label? : string;}} props 
 */
const Input = (props) => {
  const { label, ...inputProps } = props;

  return (
    <div className='input-group'>
      {
        label ?
          <label>
            <span>{label}</span> &nbsp;
            {inputProps.required && <span className='req'>*</span>}
          </label>
          : null
      }
      <input type="text" className='formComp' {...inputProps} />
    </div>
  );

};
export default Input;