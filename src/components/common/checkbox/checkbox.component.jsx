import React from "react";
import './checkbox.css';

/**
 * Renders a checkbox element.
 * @param {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
 *  label?: string;
 * }} props 
 */

const Checkbox = (props) => {
    const { label, ...inputProps } = props;
    
    return (
        <div className='checkbox-group'>
            <input type="checkbox" id="myCheckbox" />
            <label {...inputProps} htmlFor="myCheckbox">{props.label}</label>
        </div>
    );
};
export default Checkbox;