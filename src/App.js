import { useReducer, useState } from "react";
import NotFoundPage from "./components/not-found/not-found/not-found";
import AddPage from "./components/pages/add/add.component";
import ViewPage from "./components/view/view.component";
import Header from "./components/header/header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ViewItemPage from "./components/view-item/view-item.component";
import LoginPage from "./components/login-page/login-page.componen";
import React from "react";
import UserProvider from "./components/provider/provider.component";
import Guard from "./components/guard/guard.component";

const initialState = [];

function App() {
  const reducer = (cart, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return [...cart, { item: action.item, quantity: 1 }];
      case "INCREMENT_CART_QUANTITY": {
        let found = false;
        const newCart = cart.map(cartItem => {
          if (cartItem.item.id === action.item.id) {
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
          if (cartItem.item.id === action.item.id) {
            if (cartItem.quantity === 1) {
              shouldDelete = true;
            } else {
              return { ...cartItem, quantity: cart.quantity - 1 };
            }

            if (shouldDelete) {
              return cart.filter(cartItem => cartItem.item.id !== action.item.id);
            }
          }
        });

        return newCart;
      }
      case "DELETE_CART_ITEM": {
        return cart.filter(cartItem => cartItem.item.id !== action.item.id);
      }

    }
    return cart;
  };

  const [cart, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <UserProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to='/view' replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/add" element={<Guard permittedRoles={['ADMIN']}><AddPage /></Guard>} />
            <Route path="/view" element={<ViewPage />} />
            <Route path="/*" element={<NotFoundPage />} />
            <Route path="/view-details/:id" element={<ViewItemPage />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}
export default App;
