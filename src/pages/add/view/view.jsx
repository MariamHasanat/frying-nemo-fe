import { useEffect, useState } from 'react';
import Item from '../../../components/item/items/item';
import Spinner from '../../../components/spinner/spinner';
import './view.css';

const View = (props) => {
  const [menuItem, setMenuItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMenuItem = () => {
    setLoading(true);

    setTimeout(() => {
      const items = JSON.parse(localStorage.menuItem || '[]');
      setMenuItem(items);
      setLoading(false);
    }, 5000);

  };
  useEffect(() => {
    getMenuItem();
  }, []);
  return (
    <div className='view-page'>
      <h1>View menu item </h1>

      {loading ?
        <div style={{ display: 'flex', justifyContent: 'center' }}><Spinner /></div>
        :
        <div className='view-container'>
          {menuItem.map((item, i) => <Item data={item} key={item.name + i} />)}
        </div>

      }
    </div>
  );
};
export default View;