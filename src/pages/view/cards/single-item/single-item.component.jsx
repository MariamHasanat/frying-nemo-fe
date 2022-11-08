import React from 'react' ;
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../../../components/common/spinner/spinner.componenr';
import MenuItem from '../menu-item/menu-item.component';
import './single-item.css' ;

const SingleItem = () => {
  const [currentItem , setCurrentitem] = useState (null) ;
  const [loading , setLoading] = useState (false) ;
  const param  = useParams () ;
  const navigate = useNavigate () ;
  useEffect (() => {
    setLoading (true)
    const items = JSON.parse (localStorage.getItem ('menuItems') || '[]') ;
    const item = items.filter (element => element.id.toString() === param.id)
    
    setCurrentitem (item)
    setLoading (false)
    console.log(item);
    if (item.length === 0) {
      navigate ('/404') ;
    }
  } , [param.id])
  return (
    <div className='singleItem'>
      {loading ? <Spinner/> : currentItem? <MenuItem item = {currentItem[0]}/> : <img src='./sad-crab.svg' alt='sad-crab'/>}
      
      
    </div>
  )
}

export default SingleItem ;