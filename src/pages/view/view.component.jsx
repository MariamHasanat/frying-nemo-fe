import './view.css';
import Card from '../../components/view/common/card/card.component';
import { useState, useSyncExternalStore } from 'react';

const ViewPage = (props) => {

  const [selectedType, setSelectedType] = useState(0)

  const isCurrentCategory = (category) => {
    if (selectedType == 0) return true;
    else if (selectedType == 1 && category == 'fish') return true;
    else if (selectedType == 2 && category == 'shisha') return true;
    else if (selectedType == 3 && category == 'drink') return true;
    else if (selectedType == 4 && category == 'chicken') return true;
    else if (selectedType == 5 && category == 'salad') return true;
  }

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  let arr = JSON.parse(localStorage.getItem('menuItems')) || [];
  return (
    <div className='view-page'>
      <p>OUR MENU</p>
      <div className='selector'>
        <p className={selectedType == 0? `selected` : ``} onClick={() => {setSelectedType(0)}}>All</p>
        <p>•</p>
        <p className={selectedType == 1? `selected` : ``} onClick={() => {setSelectedType(1)}}>Fish</p>
        <p>•</p>
        <p className={selectedType == 2? `selected` : ``} onClick={() => {setSelectedType(2)}}>Shisha</p>
        <p>•</p>
        <p className={selectedType == 3? `selected` : ``} onClick={() => {setSelectedType(3)}}>Drink</p>
        <p>•</p>
        <p className={selectedType == 4? `selected` : ``} onClick={() => {setSelectedType(4)}}>Chicken</p>
        <p>•</p>
        <p className={selectedType == 5? `selected` : ``} onClick={() => {setSelectedType(5)}}>Salad</p>
      </div>
      <div className='cards'>
        {
          arr.length != 0? (arr.map((item, i) => isCurrentCategory(item.category)? <Card itemName={item.name} itemCategory={capitalizeFirstLetter(item.category)} itemDescription={item.description} itemIngredients={item.ings.toString().replaceAll(',', ', ')} itemPrice={item.price} image={item.image} i={i}/> : null))
        : <div>No items found!</div>
        }
      </div>
    </div>
  );
};

export default ViewPage;