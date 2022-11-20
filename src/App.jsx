import React, { useReducer } from "react";
import AddPage from "./pages/add/add.component";
import Header from "./components/header/header.component";
import ViewPage from "./pages/view/view.component";
import ViewItemPage from "./pages/view-item/view-item.component";
import NotFoundPage from "./pages/not-found/not-found.component";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./pages/login/login.component";



const initialState = [];

function App() {

  const reducer = (cart, action) => {
    // This function updates the state
    switch (action.type) {
      case "ADD_CART_ITEM":
        return [...cart, { meal: action.meal, quantity: 1 }];
      case "INCREMENT_CART_QUANTITY": {
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
      case "DELETE_CART_ITEM": {
        return cart.filter(cartItem => cartItem.meal.id !== action.meal.id);
      }
    }

    return cart;
  };

  const [cart, dispatch] = useReducer(reducer, initialState);

  return (

    <UserProvider>

      <BrowserRouter>

        <Header />

        <Routes>

          <Route path="/" element={<Navigate to="/view" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/view" element={<ViewPage dispatch={dispatch} />} />
          <Route path="/view-details/:id" element={<ViewItemPage />} />
          <Route path="/*" element={<NotFoundPage />} />

        </Routes>

      </BrowserRouter>

    </UserProvider>
  );
}

export default App;
