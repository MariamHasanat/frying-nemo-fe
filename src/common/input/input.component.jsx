import React from "react";
import "./input.css"
/**
 * 
 * @param {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &{
 * label?: String;
 * }} props 
 */
const Input=props =>{
const{label,...inputProps}=props;

return(
  <div className="input-group">
   {label ? 
   <label>
    <span>{label}</span>
    
    {inputProps.required && <span>*</span>}
   </label>:null
   }
   <input {...inputProps} />

  </div>
);
}
export default Input;