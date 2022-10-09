import React from 'react';
import './select.css';

/**
 * Renders an input element.
 * @param {React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & {
 *  label?: string;
 * options?:Array;
 * }} props 
 */
const Select = props => {
  const { label, options, ...selectProps } = props;

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


      <select {...selectProps}>
        {
          
          options.map(
            e => {
              return (
                <option key={e}>{e}</option>
              );
            }
          )
        }
      </select>
    </div>
  );
};

export default Select;