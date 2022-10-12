import'./input.css';
import React from 'react';
/**
 * 
 * @param {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
 *  label?: string;
 * }} props 
 * @returns 
 */


const Input =(props)=>{
  const { label,...inputProps} = props;
  return(
    <div className='input-group'>
    {
    label&&(
      <label>
       <span>{label}</span>
       &nbsp;
      {inputProps.required&& <span>*</span>}
      </label>
    ) 
 }
  <input {...inputProps}/>
    </div>
  );
};
export default Input;