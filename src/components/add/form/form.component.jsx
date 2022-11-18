import './form.css';
import React, { useState } from 'react';
import Input from '../../common/input/input.component';
import Textarea from '../../common/textarea/textarea.component';
import SelectArea from '../../common/selectarea/selectarea.component';
import MultivalueInput from '../../common/multivalue-input/multivalueInput';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../../../data/constants';


const Form = (props) => {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const navigate = useNavigate();

    /**
     * @param {React.ChangeEvent<HTMLInputElement>} e
     */
    const submitHandler = e => {
        const price = Number(e.target.price.value);
        const des = e.target.description.value;
        const image = e.target.image.value;
        const cat = e.target.category.value;

        const item = {
            id: (new Date().getTime() + "" + Math.random() * 1000),
            name: name,
            price: price,
            description: des,
            category: cat,
            ingredients: ingredients,
            image: image,
        };

        let items = localStorage.getItem('menuItems');
        items = JSON.parse(items) || [];
        items.push(item);
        localStorage.setItem('menuItems', JSON.stringify(items));

        navigate('/view');
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
            <form className='form' onSubmit={e => {
                e.preventDefault();
                submitHandler(e);
            }}>
                <Input
                    name='Name'
                    label='Name'
                    type={'Text'}
                    value={name}
                    onChange={changeHandler}
                    required
                />
                <Textarea
                    label='Description'
                    name={'description'}
                />
                <Input
                    label="Image"
                    name="image"
                    required
                />
                <Input
                    label='Price'
                    name='price'
                    type={'number'}
                    min={0}
                    required
                />
                <SelectArea label='Categories' name={'category'} required>

                    {
                        CATEGORIES.map((item) => {
                            return <option key={item} value={item}>{item}</option>;
                        })
                    }
                </SelectArea>
                <MultivalueInput
                    label={'Ingredients'}
                    value={ingredients}
                    name={'ingredients'}
                    onChange={(newItem) => {
                        setIngredients(newItem);
                    }}
                />
                <div className='sub'>
                    <input
                        type="submit"
                        className='nemo-button'
                        disabled={props.user?.role !== "ADMIN"}
                    />
                </div>
            </form>
        </div >
    );

};





export default Form;