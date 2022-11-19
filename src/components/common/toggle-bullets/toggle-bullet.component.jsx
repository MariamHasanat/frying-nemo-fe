import React, { useState } from 'react';
import './toggle-bullet.css';
import { useSearchParams } from 'react-router-dom';

/**
 * 
 * @param {{
 * name:string;
 * useParam: => void;
 * }} props 
 * @returns 
 */
const ToggleBullet = (props) => {

    const [params] = useSearchParams();
    const [checked, setChecked] = useState(false);
    const categoriesFromURL = params.getAll('categories') || [];

    const handleChange = (e) => {
        const check = e.target.checked;
        if (check) {
            setChecked(true);
            props.useParam('categories', [...categoriesFromURL, props.name]);
        }
        else {
            setChecked(false);
            props.useParam('categories', categoriesFromURL.filter((item) => item !== props.name));
        }
    };
    return (
        <div className='check-box-group'>
            <input
                type="checkbox"
                className={`check-box`}
                id={`${props.name}`}
                onChange={(e) => handleChange(e)}
            />
            <label className={`${checked ? 'checked' : 'check-box-label'}`} htmlFor={`${props.name}`}>{props.name}</label>
        </div>
    );
};

export default ToggleBullet;
