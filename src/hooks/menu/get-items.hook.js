//fetch items from server
import { useEffect, useState } from "react";
import { fetchItems } from "../../services/item";
import useParams from "../params.hook";

const useGetItem = () =>{
  const [state, setState] = useState({menuItems: [], loading: true});
  const {myParams} = useParams();

  const getMenuItems = async () => {
    setState({...state,loading: true});
    const categories = JSON.parse(myParams.categoriesFromURL)
    const items = await fetchItems(myParams.searchTermsFromURL, categories)
    setState({loading: false, menuItems: items});
};

useEffect(()=> {getMenuItems(); }, [myParams]);
  return {
    ...state
  }
}

export default useGetItem