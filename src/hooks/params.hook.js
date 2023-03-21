import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

const useParams =()=>{
  const [searchParams,setSearchParams] = useSearchParams();

  const myParams = useMemo(() => {
    const searchTermsFromURL = searchParams.get('searchTerms') || '';
    const categoriesFromURL = searchParams.getAll('category') || [];
    return { searchTermsFromURL, categoriesFromURL };
  }, [searchParams]);

  const setParam = (str,value)=>{
    const newParams = new URLSearchParams(searchParams);
    if (value && value !== 0) {
      newParams.set(str,value);
    } else {
      newParams.delete(str);
    }
    setSearchParams(newParams);
  };
  return {myParams,setParam};
}

export default useParams;