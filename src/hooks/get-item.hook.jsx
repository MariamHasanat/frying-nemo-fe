import { useEffect } from "react";
import { useState } from "react";
import { getItems } from "../services/items";

const useGetItems = () => {

  const [state, setState] = useState({ menuItems: [], loading: true });

  const fetchItems = async () => {
    setState({ loading: true });
    const items = await getItems();
    setState({ loading: false, menuItems: items });
  };

  useEffect(() => { fetchItems(); }, []);

  return { ...state };
};

export default useGetItems;