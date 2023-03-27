import { useEffect, useState } from "react";
import useParams from './../../hooks/view/params.hook';
import { fetchItems } from "../../services/items.service";
import { deleteItem } from './../../services/items.service';

const useGetItems = () => {

    const [state, setState] = useState({ loading: true, menuItems: [] });
    const { myParams } = useParams();

    const getMenuItems = async () => {
        setState((oldState) => ({ ...oldState, loading: true }));
        const items = await fetchItems(myParams.categoriesFromURL, myParams.searchParFromURL);
        setState((oldState) => ({ ...oldState, menuItems: items.value.items || [], loading: false }));
    };

    const deleteItems = (id) => {
        const res = window.confirm('Are you sure to delete the item? ');
        if (!res) {
            alert('The item is not deleted');
            return;
        }
        setState((oldState) => ({ ...oldState, loading: true }));
        const deleteValue = deleteItem(id);
        if (!deleteValue) {
            alert('Error, the item is not deleted');
        }
        getMenuItems();
    };

    useEffect(() => {
        getMenuItems();
    }, [myParams]);


    return {
        ...state,
        deleteItems,
    };
};

export default useGetItems;