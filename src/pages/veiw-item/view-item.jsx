import { useState, useEffect } from 'react';
// import './viewitem.css';
import { useNavigate, useParams } from 'react-router-dom';
import { getItem } from '../../components/services/items';
import Card from '../view/card';

/**
 * @type {Array<{
 * id :number
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

  const navigate = useNavigate();

  useEffect(() => {
    const item = getItem(params.id);
    setCurrentItem(item);
    if (item === null)
      navigate('/404', { replace: true });

  }, []);


  return (
    <div className="view-item-page">
      <h1>View Menu Item</h1>
      {
        currentItem !== null
          ? <Card data={currentItem} />
          : <span>Item Not Found!</span>
      }
    </div>
  );
};

export default ViewItemPage;
