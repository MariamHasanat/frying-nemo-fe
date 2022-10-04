import React from "react";
import './textarea.css';

/**
 * 
 * @param {React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>} props 
 * @returns 
 */

const Textarea = props => {
  const { label, ...textareaProps } = props;

  return (
    <div className="textarea-group">
      {
        label ? (
          <label>
            <span>{label}</span>
            &nbsp;
            {textareaProps.required && <span>*</span>}
          </label>
        ) : null}
      <textarea {...textareaProps} />
    </div>
  );
};

export default Textarea;