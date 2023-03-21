import { useState, useEffect } from "react";
import { getItems } from "../../services/items";
import { useParams } from "../params.item";
const UseGetItem = () => {
  const [state, setState] = useState({ menuItems: [], loading: true });
  const { myParams } = useParams();
  const getMenuItems = async () => {
    setState({ ...state, loading: true });
    const categories = JSON.stringify(myParams.categoryParams);
    const items = await getItems(myParams.searchURL,categories);
    setState({ menuItems: items, loading: false });
  };

  useEffect(() => { getMenuItems(); }, [myParams]);

  
  return { ...state };
};

export default UseGetItem;