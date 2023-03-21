import { useEffect, useState } from "react";
import { getAllItems } from "../services/fetchItem";

const useGetItems = () => {
    const [state, setState] = useState({ menu: [], loading: false });
    const getMenu = async () => {
        setState({...state, loading: true})
        const items = await getAllItems();
        console.log(items);
        setState({menu: items, loading: false});
    };

    useEffect(() => {
        getMenu();
    }, []);
    return { ...state };
};
export default useGetItems;