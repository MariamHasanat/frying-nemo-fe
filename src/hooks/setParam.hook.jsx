import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const useParam = () => {
    const [params, setParams] = useSearchParams();
    
    const myParams = useMemo(() => {
        const searchTerms = params.get('searchTerms') || '';
        const categoryFilters = params.getAll('category') || '';
        const priceMin = Number(params.getAll('priceMin')) || 0;
        const priceMax = Number(params.getAll('priceMax')) || 0;

        return { searchTerms, categoryFilters, priceMax, priceMin};
    }, [params]);


    const setParam = (name, value) => {
        const newParams = new URLSearchParams(params);

        newParams.delete(name);

        if (Array.isArray(value)) {
            value.forEach(item => newParams.append(name, item));
        } else if (value.trim()) {
            newParams.set(name, value.trim());
        }

        setParams(newParams);
    };
    return [myParams, setParam];
};
export default useParam;