import { useMemo } from "react";
import { useSearchParams } from 'react-router-dom';

const useParam = () => {
  /**
   * Set query string parameter.
   * @param {string} name Parameter name.
   * @param {string | string[]} value Parameter value.
   */
  const [params, setParams] = useSearchParams();
  
  const myParams = useMemo (() => {
    const searchFromURL = params.get('search') || '';
    const categoriesFromURL = params.getAll('category') || '';
    const minFromURL = params.get('min') || '';
    const maxFromURL = params.get('max') || '';
  }, [params]) 
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
  
  return {myParams , setParam};

}
export default useParam;