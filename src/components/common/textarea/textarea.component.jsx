import React from "react";
import './textarea.css';

/**
 * 
 * @param {React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & 
 * {label? : string;}} props 
 * @returns 
 */
const Textarea = (props) => {
    const { label, ...textareaProps } = props;
    return (
        <div className='textarea-group'>
            {label ? (
                <label>
                    <span>{label}</span>
                    {textareaProps.required && <span>&nbsp;*</span>}
                </label>
            ) : null}
            <textarea {...textareaProps} />
        </div>
    );
};

export default Textarea;