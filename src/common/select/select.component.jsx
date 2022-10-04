import React from "react";
import "./select.css"
/**
 * 
 * @param {React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> &{
 * label?: String;
 * }} props 
 */
const Select=props =>{
const{label,...selectProps}=props;

return(
  <div className="select-group">
   {label ? 
   <label>
    <span>{label}</span>
   </label>:null
   }
  <select {...selectProps}>
  </select>

  </div>
);
}
export default Select;