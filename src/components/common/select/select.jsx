


import React from 'react';
import './select.css';

/**
 *  @param { React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & {
 * label?: string;
 * }} props
 *  
 * b
 * 
 */
const MySelect = props => {
  const { label, ...selectProps } = props;

  return (
    <div className="select-group">
      {
        label ? (
          <label>
            <span>{label}</span>
            &nbsp;
            {selectProps.required && <span>*</span>}
          </label>
        ) : null
      }
      <select {...selectProps} />
    </div>
  );
};

export default MySelect;