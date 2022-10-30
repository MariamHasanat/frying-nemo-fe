import './view.css';
import Card from '../../components/view/common/card/card.component';
import { useState } from 'react';
import Input from '../../components/add/common/input/input.component';
import { useEffect } from 'react';
import { createSearchParams, useSearchParams } from 'react-router-dom';

const ViewPage = (props) => {

  const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1); // Helper
  const isCurrentCategory = (category) => { // Helper
    if (selectedType == 0) return true;
    else if (selectedType == 1 && category == 'fish') return true;
    else if (selectedType == 2 && category == 'main dish') return true;
    else if (selectedType == 3 && category == 'drink') return true;
    else if (selectedType == 4 && category == 'chicken') return true;
    else if (selectedType == 5 && category == 'salad') return true;
  };

  const [selectedType, setSelectedType] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('search') || '');

  const updateSearch = (value) => {
    setSearchParams(value != ''? createSearchParams({search: value}) : createSearchParams({}))
    setSearch(value)
  }

  let arr = JSON.parse(localStorage.getItem('menuItems')) || []; // Fetching data
  arr = arr.filter((item) => {
    const fixStr = (str) => str.toLowerCase().trim();
    const isMatch = (str1) => fixStr(str1).includes(fixStr(search));
    return isMatch(item.name) || isMatch(item.description) || item.ings.some(ing => ing.includes(search));
  });


  return (
    <div className='view-page'>
      <p>OUR MENU</p>
      <div className='view-header'>
        <div className='selector'>
          <p className={selectedType == 0 ? `selected` : ``} onClick={() => { setSelectedType(0); }}>All</p>
          <p>•</p>
          <p className={selectedType == 1 ? `selected` : ``} onClick={() => { setSelectedType(1); }}>Fish</p>
          <p>•</p>
          <p className={selectedType == 2 ? `selected` : ``} onClick={() => { setSelectedType(2); }}>Main Dish</p>
          <p>•</p>
          <p className={selectedType == 3 ? `selected` : ``} onClick={() => { setSelectedType(3); }}>Drink</p>
          <p>•</p>
          <p className={selectedType == 4 ? `selected` : ``} onClick={() => { setSelectedType(4); }}>Chicken</p>
          <p>•</p>
          <p className={selectedType == 5 ? `selected` : ``} onClick={() => { setSelectedType(5); }}>Salad</p>
        </div>
        <Input onChange={(e) => updateSearch(e.target.value)} value={search} style={{ backgroundColor: `white`, color: `black`, border: '1px solid black' }}></Input>
      </div>
      <div className='cards'>
        {
          arr.length != 0 ? (arr.map((item, i) => isCurrentCategory(item.category) ? <Card itemName={item.name} itemCategory={capitalizeFirstLetter(item.category)} itemDescription={item.description} itemIngredients={item.ings.toString().replaceAll(',', ', ')} itemPrice={item.price} image={item.image} i={i} /> : null))
            : <div className='none'>No items found!</div>
        }
      </div>
    </div>
  );
};

export default ViewPage;