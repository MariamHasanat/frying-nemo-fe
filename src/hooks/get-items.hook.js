import { useEffect, useState } from "react";
import { fetchItems } from "../services/view/fetch-items.service";
const useGetItems = () => {
  const [state, setState] = useState({ loading: false, items: [] });
  const getMenuItems = async () => {
    setState({ ...state, loading: true });
    try {
      const tempItems = await fetchItems();
      setState({ loading: false, items: tempItems });
    }
    catch (error) {
      console.error(error);
    }
  };

  useEffect(() => { getMenuItems(); }, []);

  return ({ ...state });
};

export default useGetItems;