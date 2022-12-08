import { useMemo, useState } from "react";
import useParams from "./params.hook";

const useFilter = (menuItems, isTourist) => {
    const { myParams } = useParams();
    const [min, setMin] = useState(null);
    const [max, setMax] = useState(null);

    const filteredItems = useMemo(() => {
        const filtered = menuItems.filter((item) => {
            let match = true;

            const doesItMatch = str => str.toLowerCase().includes(myParams.searchParFromURL.trim().toLowerCase());

            match = (
                doesItMatch(item.name) ||
                doesItMatch(item.description) ||
                item.ingredients.some(ingredient => doesItMatch(ingredient))
            );
            if (myParams.categoriesFromURL.length > 0)
                match &= (myParams.categoriesFromURL.includes(item.category));
            if (min !== null && min !== '')
                match &= (item.price >= min);
            if (max !== null && max !== '')
                match &= (item.price <= max);
            return match;
        });

        if (isTourist)
            return filtered.map(item => { return { ...item, price: item.price * 2 }; });
        return filtered;
    }, [myParams, menuItems, isTourist, min, max]);
    return { filteredItems, setMin, setMax };
};

export default useFilter;