import { useState, useEffect } from "react";
import "./view-item.css";
import {useNavigate, useParams } from "react-router-dom";
import { getItem } from "../../services/items";
import Select from "../../components/common/select/select.component";
import PriceBar from "../../components/view/price-bar/price-bar.component";


/**
 * @type {Array<{
 * id: number
 * name: string;
 * description: string;
 * ingredients: string[];
 * price: number;
 * category: string;
 * photo: string;
 * }>}
 */

const ViewItemPage = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const [currentItem, setCurrentItem] = useState(null);
  
  useEffect(() => {
    const item = getItem(params.id);
    setCurrentItem(item);
    if (item === null) {
      navigate("/404", { replace: true });
    }
  }, []);

  return (
    <div className="view-item-page">
      {currentItem !== null && (
        <div>
          <h1>View Menu Item</h1>
          <div className="card-container">
            <div className="card">
              <div
                className="card-image"
                style={{ backgroundImage: "url(" + currentItem.image + ")" }}
              ></div>
              <div className="card-name">{currentItem.name}</div>
              <span className="card-text">Description</span>
              <div className="card-description">
                &nbsp;{currentItem.description}
              </div>
              <div className="card-price">
                <span className="card-text">Price: </span>
                {currentItem.price} <span className="card-text-dollar">$</span>
              </div>
              <div className="card-category">
                <span className="card-text">Category: </span>
                {currentItem.category}
                <br />
                <span className="card-text">Ingredients</span>
              </div>
              <div className="card-buttom-container">
                <Select name="category" label="" className="card-Ingredients">
                  {currentItem.ingredients.map((current) => {
                    return (
                      <option key={current} value={current} disabled>
                        {current}
                      </option>
                    );
                  })}
                </Select>
              </div>
              <PriceBar item={currentItem} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewItemPage;
