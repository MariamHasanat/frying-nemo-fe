/*
* This hooks is used to fetch items form the server (all items or filtered), 
* and to store the state of the menu items
*/


import {useState , useEffect } from 'react'
import { fetchItemsApi } from '../components/add/form/data/items';
 const useGetitems =()=>{
    const [state ,setState ]= useState({menuItems:[],loading:true});
    const getMenuItems = async () => {
        setState ({...state,loading:true});
     
        const items = await fetchItemsApi();
        setState ({menuItems:items,loading:false});
      };

      useEffect (()=>{getMenuItems()},[]);
      
      return {...state};
 }
 export default useGetitems; 