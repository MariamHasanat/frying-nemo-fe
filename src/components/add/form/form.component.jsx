import { useState } from 'react';
import Input from '../../common/input/input.component';
import Multivalue from '../../common/multivalue-input.component.jsx/multivalue-input.component';
import Select from '../../common/select/select.component';
import Textarea from '../../common/textarea/textarea.component';
import './form.css';
import '../../../common.css';


const categories = [
    "Fish",
    "Drinks",
    "desserts",
    "Main Dishs",
    "Pizza",
    "Sandwiches"
];

const Form = (props) => {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState([]);

    /**
     * Form Submit Handler 
     * @param e{React.ChangeEvent<HTMLInputElement>} event
     */
    const submitHandler = (e) => {
        e.preventDefault();
        /**
         * @type {HTMLFormElement}
         */
        console.log(name);
    };

    const inputChangeHandler = (e) => {

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
                label="Name"
                onChange={inputChangeHandler}
                value={name}
                required
            />
            <Textarea
                label='Description'
            />

            <Select required label='Category'>
                {categories.map((item) => {
                    return <option key={item} value={item}>{item}</option>;
                })}
            </Select>

            <Multivalue
                label="Ingredients"
                // value={[2, 3, 4, 5]}
                value={ingredients}
                onChange={(newIngredients) => setIngredients(newIngredients)}
            />
            <div>
                <button className='nemo-button' type='submit'>Create</button>
            </div>
        </form>
    );
};

export default Form;