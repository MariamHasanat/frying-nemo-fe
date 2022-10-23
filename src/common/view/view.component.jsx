import './view.css';
import Items from '../view/item/item.component';
import { useState,useEffect } from "react";
const getMenu = ()=>JSON.parse(localStorage.menuItems|| '[]');
const ViewPage = (props) => {
  /**
   * @type {{Array,Function}}
   * 
   */
   const [loading, setLoading] = useState(false);
   
   const getMenuItems = () => {
    setLoading(true);
     // Run the code inside after 1000 milliseconds (1 Second)
     setTimeout(() => {
      const items = JSON.parse(localStorage.menuItems || '[]');

      getMenuItems(items);
      setLoading(false);
    },1000);
  };

  useEffect(() => {
    getMenuItems();
  }, []);


  const[menuItems]=useState(getMenu());
  return (
    <div className="view-page">
      <h1>View All Menu Items</h1>
      <div className="item">
        {
          menuItems.map((item,index )=> <Items data={item} key={item.name + index}/>)
        }
      </div>
    </div>
  );
};

export default ViewPage;
