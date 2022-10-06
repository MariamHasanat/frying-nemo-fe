import React from 'react';
import './selector.css';

/**
 * Renders an input element.
 * @param {React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & {
 *  label?: string;
 * }} props 
 */
const Select = props => {
  const { label, ...selectProps } = props;

  return (
    <div className="select-group">
      {
        label ? (
          <label>
            <span className='label-name'>{label}</span>
            &nbsp;
            {selectProps.required && <span>*</span>}
          </label>
        ) : null
      }
      <select {...selectProps} />
    </div>
  );
};

export default Select;