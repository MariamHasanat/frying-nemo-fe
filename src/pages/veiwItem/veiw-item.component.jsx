import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../../services/items';
import { useNavigate } from 'react-router-dom';
import Item from '../../components/item/item.component';
import './veiw-item.css';

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

const AddveiwItem = (props) => {
 const params = useParams();
 const [currentItem,setCurrentItem] = useState(null);
const navigate =useNavigate();
  useEffect(() => {
  const item = getItem(params.id);
  setCurrentItem(item);
  if(item == null)
  navigate('/404')
 }, []
);


 return (
  <div className="view-item-page">
    {currentItem? <div className="item-details">
          <h1>{currentItem.name}</h1>
          <div className="img">
            <img src={currentItem.image} alt="food" />
          </div>
          <div className="info">
            <p><b>Item Description: </b> {currentItem.description}</p>
            <p className="ingredients"><b>Ingredients:</b>
              <br />{currentItem.ingredients.join(", ")}</p>
          </div>
         
        </div> : navigate('/error')}

  </div>
);

};

export default AddveiwItem;
