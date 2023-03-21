/*
* This hooks is used to fetch items form the server (all items or filtered), 
* and to store the state of the menu items
*/
import { useEffect, useState } from "react";
import { fetchItems } from "../../services/items.service";

import useParams from './../../hooks/params.hook';

const useGetItems = () => {
  const [state, setState] = useState({ menuItems: [], loading: true });
  const { myParams } = useParams();

  const getMenuItems = async () => {
    setState({ ...state, loading: true });
    const categories = JSON.stringify(myParams.categoriesFromURL);
    const items = await fetchItems(myParams.searchTermsFromURL, categories);
    
    setState({ loading: false, menuItems: items });
  };

  useEffect(() => { getMenuItems(); }, [myParams]);

  return { ...state };
};

export default useGetItems;