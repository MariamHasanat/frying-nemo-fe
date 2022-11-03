import './view.css';
import Card from '../../components/view/common/card/card.component';
import { useState } from 'react';
import Input from '../../components/add/common/input/input.component';
import { useSearchParams } from 'react-router-dom';
import FilterBar from '../../components/view/common/filter/filter-bar.component';
import { CATEGORIES } from '../../data/constants';

const ViewPage = (props) => {

  const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1); // Helper

  const translateCategory = (value) => {
    return CATEGORIES[value - 1]
  }

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('search') || '');

  const updateParam = (key, value) => {
    let params = new URLSearchParams(searchParams);
    value ? params.set(key, value) : params.delete(key);
    setSearchParams(params);
  };

  let arr = JSON.parse(localStorage.getItem('menuItems')) || []; // Fetching data
  arr = arr.filter((item) => {
    const fixStr = (str) => str.toLowerCase().trim(); // Helper
    const isMatch = (str1) => fixStr(str1).includes(fixStr(search)); // Helper
    return (
      isMatch(item.name) ||
      isMatch(item.description) ||
      item.ings.some(ing => ing.includes(search))
    );
  });


  return (
    <div className='view-page'>
      <div className='header'>
        <p>OUR MENU</p>
        <FilterBar searchParams={searchParams} updateParam={updateParam} search={search} setSearch={setSearch}></FilterBar>
      </div>
      
      <div className='cards'>
        {
          arr.length != 0 ? (arr.map((item, i) => <Card itemName={item.name} itemCategory={capitalizeFirstLetter(item.category)} itemDescription={item.description} itemIngredients={item.ings.toString().replaceAll(',', ', ')} itemPrice={item.price} image={item.image} i={i} ctr={0} />))
            : <div className='none'>No items found!</div>
        }
      </div>
    </div>
  );
};

export default ViewPage;