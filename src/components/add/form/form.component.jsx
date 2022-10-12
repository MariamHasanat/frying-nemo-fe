import './form.css';
import React, { useState } from 'react';
import Input from '../../common/input/input.component';
import Textarea from '../../common/textarea/textarea.component';
import SelectArea from '../../common/selectarea/selectarea.component';
import MultivalueInput from '../../common/multivalue-input/multivalueInput';



const Form = (props) => {
    const [name, setName] = useState('');
    const [Ingredients, setIngredients] = useState([]);
    let categories = [
        'Fish',
        'Drinks',
        'Hookah',
        'Salads',
        'Sandwiches',
        'Main Dish',
        'Appetizers',
        'Ice Cream'

    ];

    /**
     * @param {React.ChangeEvent<HTMLInputElement>} e
     */
    const submitHandler = e => {
        const price = Number(e.target.price.value);
        const des = e.target.description.value;
        const cat = e.target.categories.value;

        const item = {
            name: name,
            price: price,
            description: des,
            categories: cat,
            Ingredients: Ingredients,
        };

        let items = localStorage.getItem('categoriesArray');
        items = JSON.parse(items) || [];
        items.push(item);
        localStorage.setItem('categoriesArray', JSON.stringify(items));

        props.onNavigate('view');
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
                    label='Price'
                    name='price'
                    type={'number'}
                    min={0}
                    required
                />
                <SelectArea label='Categories' name={'categories'} required>

                    {
                        categories.map((item) => {
                            return <option key={item} value={item}>{item}</option>;
                        })
                    }
                </SelectArea>
                <MultivalueInput
                    label={'Ingredients'}
                    value={Ingredients}
                    onChange={(newItem) => { setIngredients(newItem); }}
                />
                <div className='sub'>
                    <input type="submit" className='nemo-button' />
                </div>
            </form>
        </div >
    );

};





export default Form;