/*
* This hooks is used to fetch items form the server (all items or filtered), 
* and to store the state of the menu items
*/


import {useState , useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import { fetchItemsApi } from '../components/add/form/data/items';
import useSearchItem from './searchItem.hook';
 const useGetitems =()=>{
    const [state ,setState ]= useState({menuItems:[],loading:true});
   const {myParams} = useSearchItem();


    const getMenuItems = async () => {
        setState ({...state,loading:true});
     
        const items = await fetchItemsApi(myParams.searchTermsFromURL);
        setState ({menuItems:items,loading:false});
      };

      useEffect (()=>{getMenuItems()},[myParams]);
      
      return {...state};
 }
 export default useGetitems; 