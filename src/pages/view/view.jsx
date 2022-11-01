import Card from './card';
import './view.css';
import React, { useState } from 'react';
import Input from '../../components/common/input/input';
import './view.css';
import { useSearchParams } from 'react-router-dom';
import { FilterBar } from './filter-bar/filter-bar';

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
const ViewPage = (props) => {

  const initial = [];
  const GetmenuItems = () => JSON.parse(localStorage.menuitems || '[]');
  const [menuitems, setMenuItems] = useState(GetmenuItems());

  //instance of class 


  const [search, setSearch] = useState('');

  /***  القيم الي يتجي بعد علامة الاستفهانم   */
  const [params, setParams] = useSearchParams();
  //my query 
  const searchFromURL = params.get("search") || '';
  const categoriesFromURL = params.get("categories") || '';
  
  console.log(params.get("search"));


  /**
         * Check if search terms are somewhere inside given string.
         * @param {string} value 
         */
  const setSearchInLocalStorage = (value) => {
    localStorage.setItem("search-Terms ", value);
    setSearch(value);
  };



  
  const filterItems = menuitems.filter(item => {

    /**
         * Check if search terms are somewhere inside given string.
         * @param {string} str 
         */

    ///update the value in isMatch method to search from search query in the URL  //easy user experience 
    const isMatch = str => str.toLowerCase().includes(searchFromURL.toLowerCase().trim());
    let match = (
      isMatch(item.name) ||
      isMatch(item.description) ||
      item.ingrediant.some(ingredient => isMatch(ingredient))
    );
 if  (categoriesFromURL ){
  match = match && (item.categories===categoriesFromURL)
 }


    return match;




    // item.name.toLowerCase().includes(search.toLowerCase().trim())


  });


  return (

    <div className='wrapper' >
      <h1>View items page</h1>


        <div className="filter">
<FilterBar searchFromURL={searchFromURL} params={params} setParams={setParams}  /> 
</div>
    
      <div className="container" >
        {
          filterItems.map((item, id) => <Card key={id + item} data={item} />)

        }

      </div>
    </div>
  );
};

export default ViewPage;