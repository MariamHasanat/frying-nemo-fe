import React, { useState } from "react";
import Handel from "./components/header/header";
import AddPage from "./pages/add/add/add.component";

import NotFound from "./pages/add/not-found/not-found";
import View from "./pages/add/view/view";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ViewItemPage from "./pages/add/viewitempage/viewitempage";
import LoginPage from "./pages/add/login/login";
import Providers from "./components/provider/provider";
import Guard from "./components/guard/guard";
import userEvent from "@testing-library/user-event";
import { useReducer } from "react";
const initialState = [];
function App() {
  const reducer = (cart, action)=>{
    switch(action.type){
      case "ADD_CART_ITEM":
        return[...cart,{meal:action.meal, quantity : 1}];
      case "INCREMENT_CART_QUANTITY":{
        let found = false;
        const newCart = cart.map(cartItem =>{
          if(cartItem.meal.id === action.meal.id){
            found = true;
            return{...cartItem , quantity:cartItem.quantity+1}
          }else {
            return cartItem;
          }
        });
        if(!found){
          return[...cart,{meal:action.meal, quantity : 1}]
        }
        return newCart;
      }
      case "DECREMENT_CART_QUANTITY":{
        let shouldDelete = false;
        const newCart=cart.map(cartItem=>{
          if(cartItem.meal.id === action.meal.id){
            if(cartItem.quantity===1){
              shouldDelete = true;
            }
           return{...cartItem,quantity:cartItem.quantity-1}
          }
          else{
            return cartItem;
          }
        });
        if(shouldDelete){
          return cart.filter (cartItem=> cartItem.meal.id !== action.meal.id);

        }
        return newCart;
      }
      case"DELETE_CART_ITEM":{
        return cart.filter(cartItem=>cartItem.meal.id!==action.meal.id);

      }
    } 
    return cart;
  };
    
  
  const[cart,dispatch]=useReducer(reducer,initialState);
  return (
    <div>
      <BrowserRouter >
        <Providers>
          <Handel cart={cart}  />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Navigate to="view" />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/add" element={<Guard  permittedRoles={['ADMIN']} ><AddPage /></Guard>} />
            <Route path="/view" element={<View  dispatch={dispatch}/>} />
            <Route path="/view/:id" element={<ViewItemPage />} />
          </Routes>
        </Providers>
      </BrowserRouter>
    </div>
  );
}

export default App;
