import { useEffect, useState } from "react";
import { useParams } from "../hooks/params.hook";
import { fetchItems } from "../services/view/fetch-items.service";
const useGetItems = () => {
  const [state, setState] = useState({ loading: false, items: [] });
  const { param } = useParams();
  const getMenuItems = async () => {
    setState({ ...state, loading: true });
    try {
      console.log(param);
      const searchTerms = param.searchUsingURL || '';
      const categories = JSON.stringify(param.categoryUsingURL);

      const tempItems = await fetchItems(searchTerms, categories);
      setState({ loading: false, items: tempItems });

    }
    catch (error) {
      console.error(error);
    }
  };

  useEffect(() => { getMenuItems(); }, [param]);

  return ({ ...state });
};

export default useGetItems;