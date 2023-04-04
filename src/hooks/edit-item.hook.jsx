import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateItem } from '../services/items';

const useUpdateItem = (id) => {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const navigate = useNavigate();
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
            name: name,
            description: description,
            price: Number(price),
            category: category,
            ingredients: ingredients,
            imageURL: image
        };

        const res = updateItem(id, menuItem);
        if (res) {
            navigate(`/view/${id}`);
        }
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
    return {
        name: {
            value: name,
            onChange: inputChangeHandler
        },
        ingredients: {
            value: ingredients,
            setValue: setIngredients
        },
        submit: submitHandler
    };
};
export { useUpdateItem };