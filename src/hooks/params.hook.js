import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';


const useParams = () => {

  const [params, setParams] = useSearchParams();

  /**
   * Set query string parameter.
   * @param {string} name Parameter name.
   * @param {string | string[]} value Parameter value.
   */

  const myParams = useMemo(() => {
    const categoriesFromURL = params.getAll('category') || '';
    const searchTermsFromURL = params.get('searchTerms') || '';

    return {
      categoriesFromURL,
      searchTermsFromURL
    };
  }, [params]);

  const setParam = (name, value) => {
    const newParams = new URLSearchParams(params);

    newParams.delete(name);

    console.log(value);
    if (Array.isArray(value)) {
      value.forEach(item => newParams.append(name, item));
    } else if (value.trim()) {
      newParams.set(name, value.trim());
    }

    setParams(newParams);
  };
  return { myParams, setParam };
};
export default useParams;