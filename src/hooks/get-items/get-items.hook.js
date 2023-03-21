import { useEffect, useState } from "react";
import useParams from './../../hooks/view/params.hook';
import { fetchItems } from "../../services/items.service";

const useGetItems = () => {

    const [state, setState] = useState({ loading: true, menuItems: [] });
    const { myParams } = useParams();

    const getMenuItems = async () => {
        setState((oldState) => ({ ...oldState, loading: true }));
        const items = await fetchItems(myParams.categoriesFromURL,myParams.searchParFromURL);
        setState((oldState) => ({ ...oldState, menuItems: items.value.items, loading: false }));
    };

    useEffect(() => {
        getMenuItems();
    }, [myParams]);


    return {
        ...state
    };
};

export default useGetItems;