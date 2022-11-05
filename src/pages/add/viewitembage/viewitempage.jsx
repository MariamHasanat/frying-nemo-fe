import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../../../components/add/form/data/items';
import Item from '../../../components/item/items/item';
import Spinner from '../../../components/spinner/spinner';
import './viewitempage.css'
const ViewItemPage =(props)=>{
  const params = useParams();
  const [currentItem, setCurrentItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const item = getItem(params.id);
    if (params.id) {
      setCurrentItem(item);
      setLoading(false);
    }
  }, [params.id]);

  return(
    <div className="view-item-page">
    <h1>View Menu Item</h1>
    {loading && <Spinner />}
    {
      !loading && currentItem !== null
        ? <Item data={currentItem} />
        : <span>Item Not Found!</span>
    }
  </div>

  )
}
export default ViewItemPage;