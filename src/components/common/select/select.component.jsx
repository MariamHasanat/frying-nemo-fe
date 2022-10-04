import React from "react";
import './select.css';

/**
 * 
 * @param {React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & 
 * {label? : string;}} props 
 * @returns 
 */
const Select = (props) => {
  const { label, ...selectProps } = props;
  // console.debug(selectProps.children);
  return (
    <div className='select-group'>
      {label ? (
        <label>
          <span>{label}</span>
          {selectProps.required && <span>&nbsp;*</span>}
        </label>
      ) : null}
      <select {...selectProps}>
      </select>
    </div>
  );
};

export default Select;