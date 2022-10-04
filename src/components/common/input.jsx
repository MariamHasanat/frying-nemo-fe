
import React from 'react';
import './add.css';


/**
 * @param { React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {label?: string; 
 * } & {required}} props
 */
const Input = (props) => {
  const { label, ...inputProps } = props;

  return (
    <div className="potato">

      {label
        ?
        <label>
          <span>{label}</span>
          &nbsp;
          {inputProps.required && <span>*</span>}
        </label>
        :
        null}
      <input {...inputProps} />
    </div>
  );
};
export default Input;