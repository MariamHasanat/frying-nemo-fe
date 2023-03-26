// this hook is used to fetch items (all items or filtered ) from the server , and stores the state of the menu items 

import { useState, useEffect } from "react";
import {getItems} from'./../../../services/items.js'
import useParams from "../../params.hook.js";

const useGetItems = () => {

  const [state, setState] = useState({ menuItems: [], loading: true });
  const { myParams } = useParams();
  
  const getMenuItems = async () => {
    setState ({...state , loading : true});
    const categories = JSON.stringify(myParams.categoriesFromURL) ;
    const items = await getItems(myParams.searchTermsFromURL, categories);
    setState({loading : false , menuItems : items})
  };

  useEffect(() => { getMenuItems(); }, [myParams]);


  return {
    ...state
  };
};
export default useGetItems;