import { useEffect, useState } from "react"
import { getItemsFromAPI } from "../services/items"
import useParams from "./use-params.hook";

const useGetItems = () => {
    const [state, setState] = useState({ menuItems: [], loading: true });
    const { myParam } = useParams();

    const getMenuItems = async () => {
        setState({ ...state, loading: true });
        const categories = JSON.stringify(myParam.categoriesFromURL);

        const items = await getItemsFromAPI(myParam.categoriesFromURL, categories);
        setState({ loading: false, menuItems: items });
    };

    useEffect(() => { getMenuItems(); }, [myParam]);

    return { ...state };
};

export default useGetItems;