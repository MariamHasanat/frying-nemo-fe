import { useState , useEffect} from "react";
import { getMenu } from "../../services/items";


const useGetItems = () => {
   const [state , setState] = useState({menuItems : [],loading : true});

   const getMenuItems = async () => {
   setState({state , loading : true})
    const items = await getMenu();
   setState({menuItems : items , loading : false})
  };

  useEffect(() => { getMenuItems() }, [])

  return {
    ...state
  }
  
}

export default useGetItems;