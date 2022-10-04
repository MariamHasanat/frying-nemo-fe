import './form.css';
import React, { useState } from 'react';
import Input from '../../common/input/input.component';





const Form = (props) => {
    const [name, setName] = useState('');

/**
 * @param {React.ChangeEvent<HTMLInputElement>} e
 */

    const submitHandler = (e) => {
        e.target.preventDefault();
    };

    const changeHandler = (e) => {
        let val = e.target.value;
        
        if (val.length > 20) {
            val = val.substring(0, val.length - 1);
        }
        setName(val);
    };
    return (
        <div>
            <form className='form'>
                <Input
                    label='Name'
                    type={'Text'}
                    value={name}
                    onChange={changeHandler}
                    required
                />
                
                <div className='sub'>
                    <input type="submit" onSubmit={submitHandler} />
                </div>
            </form>
        </div>
    );

};





export default Form;