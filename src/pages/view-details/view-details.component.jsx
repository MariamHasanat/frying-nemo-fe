import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMenuItems } from '../../services/fetchers';
import './view-details.css';

const ViewDetailsPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  if (item == null) {
    fetchMenuItems(id).then(
      (res) => {
        setItem(res)
      }
    )
  }

  return (
    <div className='view-page'>
      <div className='header'>
        <p>Item Details</p>
        <p className='itemName'>{item?.name}</p>
      </div>
      <div className='details'>
        <img src={item?.image} alt="Item Image" />
        <div className='info'>
          <h3>Item Description:{item?.description}</h3>
          <h2>Ingredients:</h2>
          {item && <h3>{item?.ingredients.toString().replaceAll(`,`, `, `)}</h3>}
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsPage;