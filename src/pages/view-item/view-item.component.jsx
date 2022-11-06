import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../../services/item";
import Spinner from "../../components/core/spinner/spinner.component";


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
    <div>
      {loading && <Spinner />}
      {!loading && currentItem !== null ? <div>
        <h1>{currentItem.name}</h1>

        <div>
          <p><b>Item Description: </b> {currentItem.description}</p>
          <p ><b>Ingredients:</b>
            <br />{currentItem.ingredients.join(", ")}</p>
        </div>



        <div>
          <span><b>Price: </b>${currentItem.price}</span>
          <div>
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