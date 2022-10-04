import './form.css';
import React, { useState } from 'react';
import Input from '../../common/input/input.component';
import Textarea from '../../common/textarea/textarea.component';
import SelectArea from '../../common/selectarea/selectarea.component';





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
                <Textarea
                    label='Description'
                />
                <Input
                    label='Price'
                    type={'number'}
                    min={0}
                    required
                />
                <SelectArea label='Categories' required>
                    <option>Fish</option>
                    <option>Main Dish</option>
                    <option>Drinks</option>
                </SelectArea>
                <div className='sub'>
                    <input type="submit" onSubmit={submitHandler} />
                </div>
            </form>
        </div>
    );

};





export default Form;