import { useEffect, useState } from "react";
import { getItems } from "../../data/items";
import useParams from "./params.hook";


const useGetItem = () => {
  const [state, setState] = useState({ menuItems: [], loading: true });
  const { myParams } = useParams();
  const getMenuItems = async () => {
    setState({ ...state, loading: true });
    const categories = JSON.stringify(myParams.categoriesFromURL);
    const data = await getItems(myParams.searchTermsFromURL, categories);
    console.log(data);
    setState({ loading: false, menuItems: data });

  };

  useEffect(() => {
    getMenuItems();
  }, [myParams]);
  return { ...state };
};
export default useGetItem;