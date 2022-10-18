import Card from './card';
import './view.css';
import React, { useState } from 'react';


const ViewPage = (props) => {

  const GetmenuItems = () => JSON.parse(localStorage.menuitems || '[]');


  const [menuitems] = useState(GetmenuItems());

  return (
    <div >
      <h1>View items page</h1>
      <div className="container" >

        {
          menuitems.map(item => <Card data={item} />)

        }

      </div>
    </div>
  );
};

export default ViewPage;