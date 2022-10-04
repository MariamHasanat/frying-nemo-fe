import React from 'react';
import './selectarea.css';

/**
 * Renders an input element.
 * @param {React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {
 *  label?: string;
 * }} props 
 */
const SelectArea = props => {
    const { label, ...selectareaProps } = props;

    return (
        <div className="selectareaGroup">
            {
                label ? (
                    <label>
                        <span>{label}</span>
                        &nbsp;
                        {selectareaProps.required && <span>*</span>}
                    </label>
                ) : null
            }
        
            <select {...selectareaProps}/>
        </div>
    );
};

export default SelectArea;