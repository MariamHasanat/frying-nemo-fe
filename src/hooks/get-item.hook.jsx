import { useEffect } from "react";
import { useState } from "react";
import { getItems } from "../services/items";
import useParams from "./params.hook";

const useGetItems = () => {

  const [state, setState] = useState({ menuItems: [], loading: true });
  const { myParams } = useParams();

  const fetchItems = async () => {
    setState({ loading: true });

    const items = await getItems(myParams.categoryFromURl, myParams.searchParamFromURl);
    setState({ loading: false, menuItems: items });
  };

  // console.log('category from url', myParams.categoryFromURl);
  console.log('searchTerms from url', myParams.searchParamFromURl);

  useEffect(() => {
    fetchItems();
  }, [myParams]);

  return { ...state };
};

export default useGetItems;