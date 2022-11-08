
import getItem from "../../../../services/item";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './view-item.css';
import Spinner from "../../../../components/core/header/spinner/spinner.component";


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

const ViewItemPage = () => {
  const params = useParams();
  const [currentItem, setCurrentItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const item = getItem(params.id);
    setCurrentItem(item);
    setLoading(false);
  }, []);


  return (
    <div className="view-item-page">
      {loading && <Spinner />}
      {
        !loading && currentItem !== null
          ? <div className="item-details">
            <h1>{currentItem.name}</h1>
            <div className="img">
              <img src={currentItem.image} alt="food" />
            </div>
            <div className="info">
              <p><b>Item Description: </b> {currentItem.description}</p>
              <p className="ingredients"><b>Ingredients:</b>
              <br/>{currentItem.ingredients.join(", ")}</p>
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
          : <span>Item Not Found!</span>
      }
    </div>
  );
};

export default ViewItemPage;
