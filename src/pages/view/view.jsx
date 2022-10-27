import Card from './card';
import './view.css';
import React, { useState } from 'react';
import Input from '../../components/common/input/input';
import './view.css';

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




  const [menuitems, getMenuitems] = useState(GetmenuItems());
  const [search, setSearch] = useState("");
  const filterItems = menuitems.filter(item => {
    // const isMatch = srt => str.toLowerCase().includes(search.toLowerCase().trim();
    // /**
    //  * @param {string}srt
    //  * 
    //  * 
    //  */






    // return (
    //   item.name.toLowerCase().includes(search.toLowerCase().trim())

    // );
    // });


  return (

    <div >
      <h1>View items page</h1>
      <Input
        type="search"
        value={search}
        onChange={e => setSearch(e.target.value)}
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