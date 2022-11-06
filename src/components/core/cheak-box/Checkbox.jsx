import React from "react";
import "./Checkbox.css"


/**
 * 
 * @param {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
 *  label?: string;
 * }} props 
 * @returns 
 */
const Checkbox = props => {
  const { label, ...inputProps } = props;

  return (
    <div >
      <span className="check-input">  <input id={`chk-lbl-${label}`} type={"checkbox"}  {...inputProps} />
        {label ?
          <label className={props.checked ? 'checked' : "not-checked"} htmlFor={`chk-lbl-${label}`}>
            <span> {label}</span>
            &nbsp;
            {inputProps.required && <span>*</span>}

          </label>
          : null
        }
      </span>
    </div>
  );
};
export default Checkbox;