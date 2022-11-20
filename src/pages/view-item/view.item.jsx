import { useState, useEffect, navigate} from 'react';
import './viewItemStyle.css';
import { useNavigate, useParams } from 'react-router-dom';
import { getItem } from '../../services/items';
import Item from '../view/item/item';
import Spinner from '../../components/spinner/spinner';

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

const ViewItemPage = (props) => {
  const params = useParams();
  navigate = useNavigate();
  const [currentItem, setCurrentItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const item = getItem(params.id);

    if (item === null ) {
      navigate("/404")
    }
    setCurrentItem(item);
    setLoading(false);
  }, [params.id]);


  return (
    <div className="view-item-page">
      <h1>View Menu Item</h1>
      {loading && <Spinner />}
      {
        !loading && currentItem !== null
          ? <Item data={currentItem} dispatch={props.dispatch} />
          : <span>Item Not Found!</span>
      }
    </div>
  );
};

export default ViewItemPage;