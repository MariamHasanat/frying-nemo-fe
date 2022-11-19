import React from 'react';
import './input.css';
/**
 * 
 * @param {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
 *  & {label? :string}} props 
 */

const Input = (props) => {
    const { label, ...otherInputs } = props;
    return (
        <div className='input-group'>
            <label>
                <span>{label}</span>
                {otherInputs.required && <span> * </span>}
            </label>
            <input {...otherInputs} />
        </div>
    );
};

export default Input;