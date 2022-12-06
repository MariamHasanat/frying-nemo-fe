import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
​
const useParams = () => {
​
  const [params, setParams] = useSearchParams();
  const searchFromURL = params.get("searchTerms") || '';
  const categoriesURL = params.getAll("categories") || '';
​
  const myParam = useMemo(() => {
    return { searchFromURL, categoriesURL };
​
  }, [params]);
​
  /**
    * Set query string parameter.
    * @param {string} name Parameter name.
    * @param {string | string[]} value Parameter value.
    */
  const setParam = (name, value) => {
    const newParams = new URLSearchParams(params);
​
    newParams.delete(name);
​
    if (Array.isArray(value)) {
      value.forEach(item => newParams.append(name, item));
    } else if (value.trim()) {
      newParams.set(name, value.trim());
    }
    setParams(newParams);
  };
  return { myParam, setParam };​
};
export default useParams;