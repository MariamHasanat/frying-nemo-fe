import { useEffect, useState } from "react";
import { getItems } from "../../data/items";


const useGetItem = () =>{
  const [state,setState] = useState({menuItems:[],loading:true});
  const getMenuItems = async () => {
    setState({...state,loading:true});
    const data = await getItems();
    setState({ loading: false, menuItems: data });

  };

  useEffect(() => {
    getMenuItems();
  }, []);
  return{...state};
}
export default useGetItem;