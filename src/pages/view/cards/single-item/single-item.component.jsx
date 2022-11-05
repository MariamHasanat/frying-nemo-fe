import React from 'react' ;
import { useState } from 'react';
import { useEffect } from 'react';
import { parsePath, useParams, useSearchParams } from 'react-router-dom';
import MenuItem from '../menu-item/menu-item.component';
import './single-item.css' ;

const SingleItem = () => {
  const [currentItem , setCurrentitem] = useState (null) ;
  const param  = useParams () ;
  useEffect (() => {
    const items = JSON.parse (localStorage.getItem ('menuItems') || '[]') ;
    const item = items.filter (element => element.id.toString() == param.id)
    setCurrentitem (item)
    console.log(item);
  } , [])
  return (
    <div className='singleItem'>
      {currentItem? <MenuItem item = {currentItem[0]}/> : <img src='./sad-crab.svg'/>}
      
    </div>
  )
}

export default SingleItem ;