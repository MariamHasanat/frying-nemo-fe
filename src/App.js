// import { useState } from "react";

import Head from "./components/pop/header";
import AddPage from "./pages/add/add.component";
import NotFound from "./pages/not-found/notfound";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ViewPage from "./pages/view/view";
import ViewItemPage from "./pages/veiw-item/view-item";
import './App.css';
import Login from "./pages/login/login";
import React, { useReducer, useState } from "react";
import UserProvider from "./components/providers/user-provider";
import Guard from "./pages/guard-page/guard";



const initial = [];
//tp pass the user to all routes without send  it as props to all children 
export const UserContext = React.createContext(null);


function App() {

  // reducer function 
  const reducer = (cart, action) => {

    switch (action.type) {

      case "Add-to-cart ":
        return [...cart, { meal: action.meal, quantity: 1 }];

      /*                ***********INCREMENT*********              */

      case "Increment-cart-Quantity": {
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

      /*                ***********DECREMENT*********              */

      case "Decrement-cart-Quantity": {
        let shouldDelete = false;
        const newCart = cart.map(cartItem => {
          if (cartItem.meal.id === action.meal.id) {
            if (cartItem.quantity === 1) {
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
      /*                ***********DELETE*********              */
      case "Delete-cart": {
        return cart.filter(cartItem => cartItem.meal.id !== action.meal.id);
      }


    }

    return cart;

  };


  ///add reducer 
  const [cart, dispatch] = useReducer(reducer, initial);


  const initialUser = JSON.parse(sessionStorage.getItem('user'));
  const [user, setUser] = useState(initialUser);


  const saveUser = user => {
    setUser(user);
    sessionStorage.setItem("user", JSON.stringify(user));
  };


  return (
    <UserProvider>
      <div>
        <BrowserRouter>
          <Head user={user} setUser={saveUser} cart={cart} />
          <Routes>
            <Route na />
            <Route path="/add" element={<Guard component='add' permittedRoles={['ADMIN']}><AddPage /></Guard>} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/view/:id" element={<ViewItemPage />} />
            <Route path="/view" element={<ViewPage />} dispatch={dispatch} />
            <Route path="/" element={<Navigate to='/view' replace />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/*" element={<Navigate to='/add' />} /> */}
          </Routes>
        </BrowserRouter>
      </div >
    </UserProvider>
  );
}

export default App;

