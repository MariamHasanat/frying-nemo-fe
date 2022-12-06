import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const useParames=()=>{
const [params,setParams]=useSearchParams();

  const myParams = useMemo( ()=> {
    const searchTermsFromURL = params.get('searchTerms') || '';
    const categoryFromURL = params.getAll('category') || '';
   return {searchTermsFromURL,categoryFromURL};
    },[])
  
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
  
   
  
}
export default useParames;