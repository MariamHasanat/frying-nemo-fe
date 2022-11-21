import React, { useReducer } from "react";
import Header from "./components/core/header/header.component";
import AddPage from "./pages/add/add.component";
import NotFound from "./pages/page not found/page-not-found.component";
import ViewPage from "./pages/view/view.component";
import ViewItemPage from "./pages/view-item/view-item.component";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./pages/login/login.component";
import UserProvider from "./components/user-provider/user-provider.component";

export const UserContext = React.createContext(null);
const initalState = [];
function App() {

  const reducer = (cart, action) => {
    switch (action.type) {
case "ADD_CART_ITEM": 
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




  case "DECREMENT_CART_QUANTITY": {

        let shouldDelet = false;
        const newCart = cart.map(cartItem => {
          if (cartItem.meal.id === action.meal.id) {
            if (cartItem.quantity === 1) {
              shouldDelet = true;
            }
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          } else {
            return cartItem;
          }
        });

        if (shouldDelet) {
          return cart.filter(cartItem => cartItem.meal.id !== action.meal.id);
        }

        return newCart;
      }
      case "DELETE_CART_ITEM": {
        return cart.filter(cartItem => cartItem.meal.id !== action.meal.id);
      }
    }

    return cart;

  };





  const [cart, dispatch] = useReducer(reducer, initalState);
  return (



    <UserProvider>
      <div>
        <BrowserRouter>
          <Header cart={cart} />
          <Routes>
            <Route path="/" element={<Navigate to="/view" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/view" element={<ViewPage dispatch ={dispatch}/>} />
            <Route path="/view/:id" element={<ViewItemPage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;

