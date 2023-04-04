import { useEffect, useState } from "react";
import { fetchItem, updateItem } from "../../services/items.service";
import { useNavigate } from "react-router-dom";

/*
*  item:{
*          _id: string;
*          name: string;
*          imageURL: string;
*          description: string;
*          price: number;
*          category: string;
*          ingredients: string[];
* }
* 
*/
const initialItem = {
    _id: '',
    name: '',
    image: '',
    description: '',
    price: 0,
    category: '',
    ingredients: [''],
};

const useEditItem = (propsId) => {
    const [item, setItem] = useState({ item: initialItem, loading: true });
    const navigate = useNavigate();

    const getItem = async () => {
        setItem((oldState) => ({ ...oldState, loading: true }));
        const item2 = await fetchItem({ id: propsId });
        setItem((oldState) => ({ ...oldState, loading: false, item: item2 }));
    };

    const submitHandler = async (e) => {
        const submit = await updateItem(item.item);
        if (submit) {
            alert('the item is updated');
        }
        else {
            alert('sorry, the item is not updated');
        }
        navigate('/view');
    };

    useEffect(() => {
        // eslint-disable-next-line
        getItem();
    }, []);

    return {
        ...item,
        setItem,
        submitHandler
    };
};

export default useEditItem;