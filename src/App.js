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



const initial = [];
//tp pass the user to all routes without send  it as props to all children 
export const UserContext = React.createContext(null);


function App() {

  // reducer function 
  const reducer = (cart, action) => {

    switch (action.type) {

      case "Add-to-cart ":
        return [...cart, action.meal];

      /*                ***********INCREMENT*********              */

      case "Increment-cart-Quantity": {
        const newCart = cart.map(CartItem => {


          if (CartItem.meal.id === action.meal.id)
            return { ...CartItem, quantity: CartItem.quantity + 1 };
          else return CartItem;

        });

        return newCart;
      }

      /*                ***********DECREMENT*********              */
      
      case "Decrement-cart-Quantity": {
        const newCart = cart.map(CartItem => {


          if (CartItem.meal.id === action.meal.id)
            return { ...CartItem, quantity: CartItem.quantity - 1 };
          else return CartItem;

        });

        return newCart;
      }
      /*                ***********DELETE*********              */
      case "Delete-cart": {
        return cart.filter(CartItem => CartItem.meal.id !== action.meal.id);
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
            <Route path="/add" element={<AddPage />} />
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

