import React from "react";
import './selector.css';

/**
 * renders an input element
 * @param { React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>; &{
 * label?:string;
 * }} props
 */
const Selector = props => {
  const { label, ...selectorprops } = props;
  return (
    <div className="selector-group">
      {label ? 
      (<label>
       <span>{label}</span> 
       &nbsp;
       {selectorprops.required && <span style={{color :"red"}}> *</span>}
        </label> 
        ): null}
      <input {...selectorprops} />
    </div>
  );
};
export default Selector;