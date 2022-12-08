import './form.css';
import React, { useState } from 'react';
import Input from '../../common/input/input.component';
import Textarea from '../../common/textarea/textarea.component';
import SelectArea from '../../common/selectarea/selectarea.component';
import MultivalueInput from '../../common/multivalue-input/multivalueInput';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../../../data/constants';
import { UserContext } from '../../providers/user-provider.component';

import { createItem } from '../../../services/items.service';
import { useContext } from 'react';

/**
* 
* @param {{
*       user: {
*           id: string;
*           email: string;
*           password: string;
*           fullName: string;
*           imageUrl: string;
*           role: string | null;
*       }   
*           | null
 * }} props 
 * @returns 
 */
const Form = () => {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const userContext = useContext(UserContext);
    const navigate = useNavigate();

    /**
     * @param {React.ChangeEvent<HTMLInputElement>} e
     */
    const submitHandler = async (e) => {
        const price = Number(e.target.price.value);
        const des = e.target.description.value;
        const image = e.target.image.value;
        const cat = e.target.category.value;

        const item = {
            // id: (new Date().getTime() + "" + Math.random() * 1000),
            name: name,
            price: price.toString(),
            description: des,
            category: cat,
            ingredients: ingredients,
            image,
        };
        const res = await createItem(item);
        if (res) {
            alert('Item added successfully');
            navigate('/view');
        }
        else {
            alert('Error adding the item!');
        }
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
                        disabled={userContext.user?.role !== 'ADMIN'}
                    />
                </div>
            </form>
        </div >
    );

};





export default Form;