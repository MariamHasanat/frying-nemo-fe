import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const useParams = () => {
  const [params, setParams] = useSearchParams();

  const param  = useMemo(() => {
    const searchUsingURL = params.get('searchTerms') || '';
    const categoryUsingURL = params.getAll('category') || [];
    const maxPrice = params.get('max') || 0 ;
    const minPrice = params.get('min') || 0 ;
    return { searchUsingURL, categoryUsingURL , maxPrice , minPrice };
  }, [params]);

  /**
   * Set query string parameter.
   * @param {string} name Parameter name.
   * @param {string | string[]} value Parameter value.
   */
  const setParam = (name, value) => {
    const newParams = URLSearchParams(params);
    newParams.delete (name) ;
    if (Array.isArray(value)) {
      value.array.forEach(category => {
        newParams.append(name, category);
      });
    }
    else if (value.trim()) {
      newParams.set(name, value.trim());
    }
    else {
      newParams.set (name , value) ;
    }
    setParams(newParams);
  };
  return { param , setParam };
};

export { useParams  };