import React from 'react';
import './check-box.css';
const CheckBox = (props) => {
    return (
        <div className='checkBoxGroup'>
            <input type="checkbox" className='checkBox' id = {`${props.name}`}></input>
            <label htmlFor={`${props.name}`} className='checkBoxLabel'>{props.name}</label>
        </div>
    );
};

export default CheckBox;
