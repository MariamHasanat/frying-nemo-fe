// this hook is used to fetch items (all items or filtered ) from the server , and stores the state of the menu items 

import { useState } from "react";
import { fetchItems } from "../../services/items.service";

const useGetItems = () => {

  const [state, setState] = useState({ menuItems: [], loading: true });
  
  const getMenuItems = async () => {
    setState ({...state , loading : true})
    const items = await fetchItems();
    setState({loading : false , menuItems : items})
  };

  useEffect(() => { getMenuItems(); }, []);

  return {
    ...state
  };
};
export default useGetItems;