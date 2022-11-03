import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './check-box.css';
/**
 * 
 * @param {{
 * name:string;
 * useParam: => void;
 * }} props 
 * @returns 
 */
const CheckBox = (props) => {

    const [params, setParam] = useSearchParams();
    const categoriesFromURL = params.getAll('categories') || [];
    const handleChange = (e) => {
        const check = e.target.checked;
        console.log(categoriesFromURL);
        if (check) {
            props.useParam('categories', [...categoriesFromURL, props.name]);
        }
        else {
            props.useParam('categories', categoriesFromURL.filter((item) => item !== props.name));
        }
    };
    return (
        <div className='checkBoxGroup'>
            <input
                type="checkbox"
                className={`checkBox`}
                id={`${props.name}`}
                onChange={(e) => handleChange(e)}
            />
            <label className='checkBoxLabel' htmlFor={`${props.name}`}>{props.name}</label>
        </div>
    );
};

export default CheckBox;
