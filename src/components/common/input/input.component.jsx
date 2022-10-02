import './input.css' ;
import React from 'react';

/**
 * 
 * @param {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {label? : string;}} props 
 */
const Input = (props) => {
  const {label , ...inputProps} = props ;
  return (
    <div>
      {label? <label > {label}</label> : null}
      <input type="text" className='formComp'
      {...inputProps}
      />
    </div>
  ) ;

} ;
export default Input ;