import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMenuItems } from "../../services/fetchers";

const useGetItems = (search, categories) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, setState] = useState({ menuItems: [], loading: true });

  const getMenuItems = async () => {
    setState(state => ({ ...state, loading: true }));
    const items = await fetchMenuItems(search, categories);
    setState({ menuItems: items, loading: false });
  };

  useEffect(() => {
    getMenuItems();
  }, [search, searchParams]);
  return state;
};

export default useGetItems;