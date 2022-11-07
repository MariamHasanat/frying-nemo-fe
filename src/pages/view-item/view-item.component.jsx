import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { getItem } from '../../services/items';
import './view-item.component.css';
const ViewItem = (props) => {
  const params = useParams();

  const navigate = useNavigate();
  //   /**
  //  * @type {Array<{
  //  * id: number;
  //    * name: string;
  //    * description: string;
  //    * ingredients: string[];
  //    * price: number;
  //    * category: string;
  //    * image: string;
  //    * }>}
  //    */
  const [currentItem, setCurrentItem] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);

    const item = getItem(params.id);
    if (item == null) {
      navigate('/404', { replace: true });
    }

    setCurrentItem(item);
    setLoading(false);


  }, []);


  return (
    <div className="view-item-page">
      {loading
        ? <span>error</span>
        : <div>
          <h1>{currentItem.name}</h1>
          <img className='item-image' src={currentItem.image} alt='item' />
          <p>{currentItem.description}</p>
          <p>{currentItem.ingredients.join(', ')}</p>
          <h3>{currentItem.price} $</h3>

        </div>

      }
    </div>
  );
};

export default ViewItem;