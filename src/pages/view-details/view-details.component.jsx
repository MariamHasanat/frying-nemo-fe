import { useParams } from 'react-router-dom';
import './view-details.css';

const ViewDetailsPage = () => {
  const {id} = useParams();

  const getItem = () => {
    let arr = JSON.parse(localStorage.getItem('menuItems')) || []; // Fetching data
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id == id) return arr[i];
    }
    return null;
  }

  const item = getItem();

  return (
<div className='view-page'>
    <div className='header'>
      <p>Item Details</p>
      <p className='itemName'>{item.name}</p>
    </div>
    <div className='details'>
      <img src={item.image} alt="Item Image"/>
      <div className='info'>
        <h3>Item Description:{item.description}</h3>
        <h2>Ingredients:</h2>
        <h3>{item.ingredients.toString().replaceAll(`,`, `, `)}</h3>
      </div>
    </div>
  </div>
  );
};

export default ViewDetailsPage;