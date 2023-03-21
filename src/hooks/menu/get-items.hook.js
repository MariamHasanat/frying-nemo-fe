//fetch items from server
import { useEffect, useState } from "react";
import { fetchItems } from "../../services/item";


const useGetItem = () =>{
  const [state, setState] = useState({menuItems: [], loading: true});

  const getMenuItems = async () => {
    setState({...state,loading: true});
    const items = await fetchItems();
    setState({loading: false, menuItems: items});
};

useEffect(()=> {getMenuItems(); }, []);
  return {
    ...state
  }
}

export default useGetItem