import { useState } from 'react';
import Input from '../../common/input/input.component';
import Multivalue from '../../common/multivalue-input.component.jsx/multivalue-input.component';
import Select from '../../common/select/select.component';
import Textarea from '../../common/textarea/textarea.component';
import './form.css';
import '../../../common.css';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../../../data/constants';
import { UserContext } from '../../providers/userContextProvider.component';
const Form = () => {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const navigate = useNavigate();
    const userContext = useContext(UserContext);
    /**
     * Form Submit Handler 
     * @param e{React.ChangeEvent<HTMLInputElement>} event
     */
    const submitHandler = (e) => {
        e.preventDefault();

        const description = e.target.description.value;
        const category = e.target.category.value;
        const price = e.target.price.value;
        const image = e.target.image.value;

        const menuItem = {
            id: Date.now(),
            name: name,
            description: description,
            price: price,
            category: category,
            ingredients: ingredients,
            image: image
        };

        const menu = localStorage.getItem('menu') || '[]';
        const parsed = JSON.parse(menu);
        parsed.push(menuItem);
        // console.log('parsed:', parsed);
        localStorage.setItem('menu', JSON.stringify(parsed));

        // just in case ;)
        // e.target.description.value = '';
        // e.target.category.value = '';
        // e.target.price.value = '';
        // setIngredients([]);
        // setName('');

        navigate('/view');
    };

    const inputChangeHandler = e => {

        let value = e.target.value;
        if (value.includes('find')) {
            value = value.replace('find', 'fry');
        }

        if (value.length >= 20) {
            alert('character limit exceeded');
            value = value.substring(0, 20);
        }
        setName(value);
    };
    return (
        <form onSubmit={submitHandler} className="styled-form">

            <Input
                name="name"
                label="Name"
                onChange={inputChangeHandler}
                value={name}
                required
            />
            <Textarea
                name="description"
                label='Description'
            />

            <Input
                name="price"
                label="Price"
                type="number"
                required
            />

            <Select required name="category" label='Category'>
                {CATEGORIES.map((item) => {
                    return <option key={item} value={item}>{item}</option>;
                })}
            </Select>

            <Multivalue
                label="Ingredients"
                name="ingredients"
                // value={[2, 3, 4, 5]}
                value={ingredients}
                onChange={(newIngredients) => setIngredients(newIngredients)}
            />
            <Input name="image" label='Image link' />

            <div>
                <button
                    className='nemo-button add-form-button'
                    disabled={userContext.user?.role !== 'ADMIN'}
                >
                    Create
                </button>

            </div>
        </form>
    );
};

export default Form;