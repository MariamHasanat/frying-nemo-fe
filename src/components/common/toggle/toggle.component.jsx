import React from 'react';
import './toggle.css';
/**
 * 
 * @param {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
* {label?:string}} props 
* @returns 
*/
const Toggle = (props) => {
  const { label, ...inputProps } = props;
  return (
    <div className='toggle'>

      <input {...inputProps} type='checkbox' />
      {
        label ? (
          <div>
            <label>{label} &nbsp;
            </label>
          </div>
        )
          : null
      }
    </div>

  );
};

export default Toggle;
