import { useState, useEffect } from 'react';
import './view-item.css';
import { useParams } from 'react-router-dom';
import { getItem } from '../../services/item';
import Item from '../../components/item/item.component';
import Spinner from '../../components/core/spinner.component';

/**
 * @type {Array<{
 * id:number;
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
    const item = getItem(params.id);
      setCurrentItem(item);
      setLoading(false);
  }, [params.id]);
  //ممكن تنشال
  


  return (
    <div className="view-item-page">
      <h1>View Menu Item</h1>
      {loading && <Spinner />}
      {
        !loading && currentItem !== null
          ? <Item data={currentItem} />
          : <span>Item Not Found!</span>
      }
    </div>
  );
};

export default ViewItemPage;
