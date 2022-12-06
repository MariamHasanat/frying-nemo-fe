import React from "react";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";



const useParams =()=>{
  const [searchParams,setSearchParams] = useSearchParams();

  const myParams =() =>{
    const categoryFromURL = searchParams.get('category') || '';
    const searchTermsFromURL = searchParams.get('q') || '';
    return {categoryFromURL,searchTermsFromURL};
  };

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