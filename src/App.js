import React, { createContext, useReducer, useState } from "react";
import AddPage from "./pages/add/add.component";
import NotFoundPage from "./pages/not-found/notfound-component";
import ViewPage from "./pages/view/view.component";
import Header from "./components/core/header/header.component";
import ViewItemPage from "./pages/view-item/view-item.component";
import LoginPage from "./pages/login/login.component";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WithBorders from "./components/common/with-borders/with-borders.component";
import UserProvider from "./components/user-provider/user-provider";
// import Guard from '../src/components/common/';
import Guard from "./components/core/guard/guard.component";


const initialState = [];


function App() {

  // actions : add, delete and update
  // Cart is an array of items
  // each item : meal + quantity 
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return [...cart, { meal: action.meal, quantity: 1 }];
      case "INCREMENT_CART_QUANTITY":
        {
          let found = false;
          const newCart = cart.map(cartItem => {
            if (cartItem.meal.id === action.meal.id) {
              found = true;
              return { ...cartItem, quantity: cartItem.quantity + 1 };
            } else {
              return cartItem;
            }
          });
          if (!found) {
            return [...cart, { meal: action.meal, quantity: 1 }];
          }
          return newCart;
        }
      case "DECREMENT_CART_QUANTITY":
        {
          let shouldDelete = false;
          const newCart = cart.map(cartItem => {
            if (cartItem.meal.id === action.meal.id) {
              if (cartItem.quantity - 1 === 0) {
                shouldDelete = true;
              }
              return { ...cartItem, quantity: cartItem.quantity - 1 };
            } else {
              return cartItem;
            }
          });
          if (shouldDelete) {
            return cart.filter(cartItem => cartItem.meal.id !== action.meal.id);
          }
          return newCart;
        }
      case "DELETE_CART_QUANTITY":
        {
          return cart.filter(cartItem => cartItem.meal.id !== action.meal.id);
        }
    }
    return cart; // no updates
  };

  // dispatch : call reducer
  const [cart, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <UserProvider>
        <BrowserRouter>
          <WithBorders>
            <Header cart={cart} />
            <Routes>
              <Route path="/" element={<Navigate to="/view" replace />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/add" element={<Guard><AddPage permittedRoles={['ADMIN']} /></Guard>} />
              <Route path="/view" element={<ViewPage dispatch={dispatch} />} />
              <Route path="/view-details/:id" element={<ViewItemPage />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </WithBorders>
        </BrowserRouter>
      </UserProvider>
    </div >
  );
}

export default App;
