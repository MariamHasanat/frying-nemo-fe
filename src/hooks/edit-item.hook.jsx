import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getItem, updateItem } from '../services/items';

const useUpdateItem = (id) => {
    const [ingredients, setIngredients] = useState([]);
    const [newItem, setNewItem] = useState({});
    const navigate = useNavigate();
    /**
     * Form Submit Handler 
     * @param e{React.ChangeEvent<HTMLInputElement>} event
     */
    const submitHandler = (e) => {
        e.preventDefault();

        getItem(id).then((old) => {
            const menuItem = {
                name: newItem.name || old.name,
                description: newItem.description || old.description,
                price: Number(newItem.price) || old.price,
                category: newItem.category || old.category,
                ingredients: newItem.ingredients || old.ingredients,
                imageURL: newItem.imageURL || old.imageURL
            };
            const updated = updateItem(id, menuItem);
            if (updated) {
                navigate(`/view/${id}`);
            }
        })
            .catch((err) => console.error(err));
    };

    const nameChangeHandler = e => {
        let value = e.target.value;
        if (value.includes('find')) {
            value = value.replace('find', 'fry');
        }

        if (value.length >= 20) {
            alert('character limit exceeded');
            value = value.substring(0, 20);
        }
        setNewItem({ ...newItem, name: value });
    };

    const inputChangeHandler = (key, value) => {
        const tmp = {};
        tmp[key] = value
        setNewItem({ ...newItem, ...tmp });
    };

    return {
        name: {
            value: newItem.name,
            onChange: nameChangeHandler
        },
        ingredients: {
            value: ingredients,
            setValue: setIngredients
        },
        description: {
            value: newItem.description,
            onChange: inputChangeHandler
        },
        price: {
            value: newItem.price,
            onChange: inputChangeHandler
        },
        category: {
            value: newItem.category,
            onChange: inputChangeHandler
        },
        imageURL: {
            value: newItem.imageURL,
            onChange: inputChangeHandler()
        },
        submit: submitHandler
    };
};
export { useUpdateItem };