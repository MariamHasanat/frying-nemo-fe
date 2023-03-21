import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const useSearchItem = ()=>{
    
    const [param, SetParam] = useSearchParams();
  
  const myParam=useMemo(()=>{
    const searchFromUrl = param.get('searchTerms') || '';
    const categoriesFromURL = param.getAll('category') || [];
    
    return {searchFromUrl,categoriesFromURL}
  },[param])
  /**
  * Set query string parameter.
  * @param {string} name Parameter name.
  * @param {string | string[]} value Parameter value.
  */
  const setParam = (name, value) => {
    const newParams = new URLSearchParams(param);

    newParams.delete(name);

    if (Array.isArray(value)) {
      value.forEach(item => newParams.append(name, item));
    } else if (value.trim()) {
      newParams.set(name, value.trim());
    }

    SetParam(newParams);
  };
  return {myParam,setParam};
};
export default useSearchItem;