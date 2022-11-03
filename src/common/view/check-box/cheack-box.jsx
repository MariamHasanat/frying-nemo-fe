import React from 'react';
import './check-box.css';

/**
 * Renders a checkbox element.
 * @param {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
 *  label?: string;
 * }} props 
 */
const CheckBox = props => {
  const { label, ...inputProps } = props;

  return (
    <div className="checkbox-group">
      <input {...inputProps} type="checkbox" />
      {
        label ? (
          <label>
            <span>{label}</span>
            &nbsp;
            {inputProps.required && <span>*</span>}
          </label>
        ) : null
      }
    </div>
  );
};

export default CheckBox;
