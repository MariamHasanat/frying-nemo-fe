/*
* This hooks is used to fetch items form the server (all items or filtered), 
* and to store the state of the menu items
*/


import {useState , useEffect } from 'react'
import { fetchItemsApi } from '../components/add/form/data/items';
import useSearchItem from './searchItem.hook';
 const useGetitems =()=>{
    const [state ,setState ]= useState({menuItems:[],loading:true});
   const { myParam} = useSearchItem();


    const getMenuItems = async () => {
      console.log(myParam);
        setState ({...state,loading:true});
        const  categories = JSON.stringify(myParam.categoriesFromURL)
        const items = await fetchItemsApi(myParam.searchFromUrl,categories);
        setState ({menuItems:items,loading:false});
      };

      useEffect (()=>{getMenuItems()},[myParam]);
      
      return {...state};
 }
 export default useGetitems; 