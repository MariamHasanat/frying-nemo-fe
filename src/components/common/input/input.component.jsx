import './input.css';
import React from 'react';
/**
 * 
 * @param {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
 *  & {label? :string}} props 
 */

const Input = (props) => {
    const { label, ...otherInputs } = props;
    return (
        <div className='inputGroup'>
            <label>{label}</label>
            <input {...otherInputs} />
        </div>
    );
};

export default Input;