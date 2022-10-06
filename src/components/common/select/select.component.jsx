import React from 'react';
import './select.css';

/**
 * Renders an input element.
 * @param {React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {
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

export default Select;