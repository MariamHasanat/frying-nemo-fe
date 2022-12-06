import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const useParams =()=>{

  const [params, setParams] = useSearchParams();

const myParam =useMemo(()=>{
  const searchFromURL = params.get("searchTerms") || '';
  const categoriesURL = params.get("categories") || '';
  const categoriesFromURL = params.getAll("categories") || [];
  const maxFromURL = params.get("max") || '';
  const minFromURL = params.get("min") || '';
  const price = params.get("price") || '';

  return { searchFromURL, categoriesURL,categoriesFromURL ,maxFromURL,minFromURL,price};

}, [params]);


 /**
   * Set query string parameter.
   * @param {string} name Parameter name.
   * @param {string | string[]} value Parameter value.
   */
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
return { myParam, setParam}


}
export default useParams;