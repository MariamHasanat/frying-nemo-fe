


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
    <div >
      {
        label ? (
          <label>
            <span>{label}</span>
            &nbsp;
            {selectProps.required && <span>*</span>}
          </label>
        ) : null
      }
      <select className="select" id="standard-select" {...selectProps} />
      <span class="focus"></span>

    </div>
  );
};

export default MySelect;