import React from 'react';
import './check-box.css';

/**
 * 
 * @param {{
 * label:string;
 * }} props 
 * @returns 
 */
const CheckBox = (props) => {
    return (
        <div className='check-box-group'>
            <input
                checked={props.checked}
                type="checkbox"
                className={`check-box`}
                id={`${props.name}`}
                onChange={props.onChange}
            />
            <label className='label'>{props.label}</label>
        </div>
    );
};

export default CheckBox;
