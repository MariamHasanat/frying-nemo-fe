import './select.css';
import React from 'react';

/**
 * 
 * @param {React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & {label? : string;}} props 
 */
const Select = (props) => {
  const { label, ...selectProps } = props;
  //props.children => options
  return (
    <div className='select-group'>
      {
        label ?
          <label>
            <span>{label}</span> &nbsp;
            {selectProps.required && <span className='req'>*</span>}
          </label>
          : null
      }
      <select  {...selectProps} />
    </div>
  );

};
export default Select;