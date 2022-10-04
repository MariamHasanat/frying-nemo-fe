import React from 'react';
import './textarea.css';

/**
 * Renders an input element.
 * @param {React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {
 *  label?: string;
 * }} props 
 */
const Textarea = props => {
  const { label, ...textareaProps } = props;

  return (
    <div className="textareaGroup">
      {
        label ? (
          <label>
            <span>{label}</span>
            &nbsp;
            {textareaProps.required && <span>*</span>}
          </label>
        ) : null
      }
      <textarea {...textareaProps} />
    </div>
  );
};

export default Textarea;