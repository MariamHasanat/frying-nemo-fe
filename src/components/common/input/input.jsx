import'./input.css';
import React from 'react';
/**
 * 
 * @param { React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>&{
 * label?:string}} props 
 * @returns 
 */


const Input =(props)=>{
  const { label,...inputprops} = props;
  return(
    <div className='input-group'>
    {label?<lable>{label}</lable>:null}
    <input {...inputprops}/>
    </div>
  );
};
export default Input;