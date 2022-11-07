import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { getItem } from '../../services/items';
import './view-item.component.css';
import { Navigate } from 'react-router-dom';
const ViewItem = (props) => {
  const params = useParams();

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
    if (params.id) {
      setCurrentItem(item);
      setLoading(false);

    }
  }, [params.id]);


  return (
    <div className="view-item-page">
      <h1>{currentItem.name}</h1>
      {
        !loading ?
          <img className='item-image' src={currentItem.image} /> : <span>error</span>
      }
    </div>
  );
};

export default ViewItem;