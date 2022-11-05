import { useState, useEffect } from 'react';
import './item.css';
import { useParams } from 'react-router-dom';
import Items from '../item/item.component';
import {getItem }from '../../../data/items';
import "../../header/header.css";


/**
 * @type {Array<{
 * name: string;
 * description: string;
 * ingredients: string[];
 * price: number;
 * category: string;
 * image: string;
 * }>}
 */

const ViewItemPage = () => {
  const params = useParams();
  const [currentItem, setCurrentItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
   const item =getItem(params.id);
    if (params.id) {
      setCurrentItem(item);
      setLoading(false);
    }
  }, [params.id]);


  return (
    <div className="view-item-page">
      <h1>View Menu Item</h1>
      {loading }
      {
        !loading && currentItem !== null
          ? <Items data={currentItem}/>
          : <span>Item Not Found!</span>
      }
    </div>
  );
};

export default ViewItemPage;
