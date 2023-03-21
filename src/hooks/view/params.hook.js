
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const useParams = () => {
    const [params, setParams] = useSearchParams();

    const myParams = useMemo(() => {
        const searchParFromURL = params.get('searchTerms') || '';
        const categoriesFromURL = params.getAll('categories') || [];
        return { searchParFromURL, categoriesFromURL };
    }, [params]);

    /**
     * @param {string} typeOfTerm 
     * @param {string | string[]} value 
     */
    const setParam = (typeOfTerm, value) => {
        const newParam = new URLSearchParams(params);
        newParam.delete(typeOfTerm);
        if (Array.isArray(value)) {
            if (value.length > 0) {

                value.forEach(item => {
                    newParam.append(typeOfTerm, item);
                });
            }
        }
        else {
            newParam.set(typeOfTerm, value);
            if (!value)
                newParam.delete(typeOfTerm);
        }
        setParams(newParam);

    };

    return {
        myParams: myParams,
        setParam: setParam
    };
};

export default useParams;