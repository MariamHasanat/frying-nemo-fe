import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
const useParams=()=>{
  const [params,setParams]=useSearchParams()
const myParams=useMemo(() =>  { 
const MINParams = parseInt(params.get('Min') || "")
const MAXParams = parseInt(params.get('Max') || "")
const searchURL = params.get('searchTerms') || "";
const categoryParams = params.getAll('category') || "" 
return {MINParams,MAXParams,searchURL,categoryParams}
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
}
return {myParams,setParam}
}

export {

  useParams

}
  