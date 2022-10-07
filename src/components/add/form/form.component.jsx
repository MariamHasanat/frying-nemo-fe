import './form.css';
import React, { useState } from 'react';
import Input from '../../common/input/input.component';
import Textarea from '../../common/textarea/textarea.component';
import SelectArea from '../../common/selectarea/selectarea.component';





const Form = (props) => {
    const [name, setName] = useState('');
    let categories = [
        'Fish',
        'Main Dish',
        'Drink',
        'Salad',
        'Ice-cream',
    ];

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
                    {categories.map((item) => {
                        return <option key={item} value={item}>{item}</option>;
                    })}
                </SelectArea>

                <div className='sub'>
                    <input type="submit" className='nemo-button' onSubmit={submitHandler} />
                </div>
            </form>
        </div>
    );

};





export default Form;