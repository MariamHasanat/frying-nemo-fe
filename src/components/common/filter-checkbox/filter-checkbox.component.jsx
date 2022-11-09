// import { useState } from "react";
import './filter-checkbox.css';

/**
 * Renders a filter-checkbox element.
 * @param {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
 *  label?: string;
 * }} props 
 */

const FilterCheckbox = (props) => {
    const { label, ...inputProps } = props;

    return (
        <div className='filter-checkbox-group'>
            <input
                value={props.value}
                type="checkbox"
                id={`filter-checkbox_id_for_${props.label}`}
                checked={props.checked}
                onChange={props.onChange} />

            <label
                {...inputProps}
                className={props.checked ? 'checked nemo-button' : 'nemo-button'}
                htmlFor={`filter-checkbox_id_for_${props.label}`}
            >
                {props.label}
            </label>
        </div>
    );
};
export default FilterCheckbox;