import Card from './card';
import './view.css';
import React, { useState } from 'react';
import Input from '../../components/common/input/input';
import './view.css';
import { useSearchParams } from 'react-router-dom';

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
  const [params, setParams] = useSearchParams();



  const searchFromURL = params.get("search");
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

    ///update the value in isMatch method to search from search query in the URL  
    const isMatch = str => str.toLowerCase().includes(searchFromURL.toLowerCase().trim());
    const match = (
      isMatch(item.name) ||
      isMatch(item.description) ||
      item.ingrediant.some(ingredient => isMatch(ingredient))
    );
    return match;

    // item.name.toLowerCase().includes(search.toLowerCase().trim())


  });


  return (

    <div >
      <h1>View items page</h1>
      <Input
        type="search"
        value={searchFromURL}
        //set the vlaue in the search input
        // onChange={e => setSearch(e.target.value)}

        ///      GET THE search value from the local storage 
        // onChange={e => setSearchInLocalStorage(e.target.value)} 


        onChange={e => {
          const newParm = new URLSearchParams(params);
          newParm.set('search', e.target.value);
          setParams(newParm);
        }}

        placeholder="Search..."
      />
      <div className="container" >

        {
          filterItems.map((item, id) => <Card key={id + item} data={item} />)

        }

      </div>
    </div>
  );
};

export default ViewPage;