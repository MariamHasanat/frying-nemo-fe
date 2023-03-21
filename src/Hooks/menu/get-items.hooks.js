import { useState , useEffect} from "react";
import { getMenu } from "../../services/items";
import useParam from "../useParam.hook";


const useGetItems = () => {
   const [state , setState] = useState({menuItems : [],loading : true});
  const { myParams } = useParam();
   const getMenuItems = async () => {
   setState({state , loading : true})
   const searchTerm = myParams.searchFromURL;
   const categories = myParams.categoriesFromURL;
   const items = await getMenu(searchTerm , JSON.stringify(categories));
   setState({menuItems : items , loading : false})
  };

  useEffect(() => { getMenuItems() }, [myParams])

  return {
    ...state
  }
  
}

export default useGetItems;