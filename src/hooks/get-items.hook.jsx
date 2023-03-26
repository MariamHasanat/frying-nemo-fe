import { useEffect, useState } from "react";
import { getAllItems } from "../services/items";
import useParam from "./setParam.hook";

const useGetItems = () => {
    const [state, setState] = useState({ menu: [], loading: false });
    const [myParams] = useParam();
    const getMenu = async () => {
        setState({ ...state, loading: true });

        const categories = JSON.stringify(myParams.categoryFilters);
        const searchTerms = myParams.searchTerms;
        const items = await getAllItems(searchTerms, categories);
        setState({ menu: items, loading: false });
    };

    useEffect(() => { getMenu(); }, [myParams]);
    return { ...state };
};
export default useGetItems;