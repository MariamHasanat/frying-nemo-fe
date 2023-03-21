import { useEffect, useState } from "react"
import { getItemsFromAPI } from "../services/items"

const useGetItems = () => {
    const [state, setState] = useState({ menuItems: [], loading: true });

    const getMenuItems = async () => {
        setState({ ...state, loading: true });
        const items = await getItemsFromAPI();
        setState({ loading: false, menuItems: items });
    };

    useEffect(() => { getMenuItems(); }, []);

    return { ...state };
};

export default useGetItems;