import React from 'react';
import './select.css';

/**
 * Renders an input element.
 * @param {React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {
 *  label?: string;
 * }} props 
 */
const Select = props => {
  const { label, ...textareaProps } = props;

  return (
    <div className="textarea-group">
      {
        label ? (
          <label>
            <span>{label}</span>
            &nbsp;
            {/* {Select.required && <span>*</span>} */}
          </label>
        ) : null
      }
      <textarea {...textareaProps} />
    </div>
  );
};

export default Textarea;