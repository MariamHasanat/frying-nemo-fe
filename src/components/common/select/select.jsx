import'./select.css';
import React from 'react';
/**
 * 
 * @param { React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>& {
 *  label?: string;
 * }} props 
 * @returns 
 */


const Select =(props)=>{
  const { label,...selectProps} = props;
  return(
    <div className='select-group'>
    {
    label?(
      <label>
       <span>{label}</span>
       &nbsp;
      {selectProps.required? <span>*</span>:null}
      </label>
    ):null
    
    }
   
    <select {...selectProps}/>
    </div>
  );
};
export default Select;