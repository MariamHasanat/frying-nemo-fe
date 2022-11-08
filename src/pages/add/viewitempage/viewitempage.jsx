import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getItem } from '../../../components/add/form/data/items';
import Item from '../../../components/item/items/item';
import Spinner from '../../../components/spinner/spinner';
import './viewitempage.css';
/**
 * @type {Array<{
 * id: number;
 * name: string;
 * description: string;
 * ingredients: string[];
 * price: number;
 * category: string;
 * image: string;
 * }>}
 */
const ViewItemPage = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const [currentItem, setCurrentItem] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    const item = getItem(params.id);
    console.log(params.id);
    if (item === null) {//اذا دخل id غلط 
      navigate("/404");
    }
    setCurrentItem(item);
    setLoading(false);

  }, []);

  return (
    <div className="view-item-page">

      {loading
      ? <Spinner />
      
        
         : <div className="item-details">

            <h1>{currentItem.name}</h1>

            <div className="img">
              <img src={currentItem.image} alt="food" />
            </div>
            <div className="info">
              <p><b>Item Description: </b> {currentItem.description}</p>
              <p className="ingredients"><b>Ingredients:</b>
                <br />{currentItem.ingredients.join(", ")}</p>

            </div>
            <div className="price">
              <span><b>Price: </b>${currentItem.price}</span>
              <div className="add-cart">
                <button>+</button>
                <input type="number" max={500} />
                <button>-</button>
              </div>
            </div>
          </div>
          
      }
    </div>

  );
};
export default ViewItemPage;;