import { useState, useEffect } from 'react';
import './viewitem.css'
import { useParams } from 'react-router-dom';
import { getItem } from '../../../item';
import Card from '../Card/Card';
import Spinner from '../../spinner/spinner.component';

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
    const item = getItem(params.id);
      setCurrentItem(item);
      setLoading(false);
  }, [params.id]);


  return (
    <div className="view-item-page">
      <h1>View Menu Item</h1>
      {loading && <Spinner />}
      {
        !loading && currentItem !== null
          ? <Card data={currentItem} />
          : <span>Item Not Found!</span>
      }
    </div>
  );
};

export default ViewItemPage;