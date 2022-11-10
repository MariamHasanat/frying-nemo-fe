import './checkbox.css';
import React from 'react';

/**
 * 
 * @param {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {label? : string;}} props 
 */
const CheckBox = (props) => {
  const { label, ...inputProps } = props;
  return (
    <div className='checkbox-group'>
      <input id={label} type="checkbox" {...inputProps} />
      {
        label ?
          <label htmlFor={label}
            className={props.checked ? 'checked' : ''}
          >
            <span>{label}</span> &nbsp;
            {inputProps.required && <span className='req'>*</span>}
          </label>
          : null
      }
    </div>
  );

};
export default CheckBox;