import React from "react";
import Input from ".././input/input.component"
import "./multivalue-input.css"
/**
 * 
 * @param {{
 * label?: String;
 * value: string[];
 * onchange:(value:string[])=> void
 * }} props 
 */
const MultivalueInput = props =>{
const{label,...inputProps}=props;

return(
  <div className="multivalue-input">
   <div className="value-input">
    <Input
    label={label.props}
    />
   </div>

  </div>
);
}
export default MultivalueInput;