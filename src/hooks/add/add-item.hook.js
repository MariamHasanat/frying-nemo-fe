import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createItem } from "../../services/items.service";
import { UserContext } from './../../components/providers/user-provider.component';

const useAddItem = () => {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const navigate = useNavigate();
    const userContext = useContext(UserContext);
    /**
     * @param {React.ChangeEvent<HTMLInputElement>} e
     */
    const submitHandler = async (e) => {
        const price = Number(e.target.price.value);
        const des = e.target.description.value;
        const image = e.target.image.value;
        const cat = e.target.category.value;
        const item = {
            name: name,
            price: price,
            description: des,
            category: cat,
            ingredients: ingredients,
            image,
        };


        const res = await createItem(item, userContext.user._id);
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

    return {
        name: {
            value: name,
            onchange: changeHandler
        },
        ingredients: {
            value: ingredients,
            setValue: setIngredients
        },
        submitHandler: submitHandler
    };
};

export default useAddItem;