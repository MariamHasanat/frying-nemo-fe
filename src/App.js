import Header from "./components/common/header/header.component";
import View from "./pages/view/view";
import '../src/pages/add/add.component';
import AddPage from "../src/pages/add/add.component";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ViewItem from "./pages/view-item/view-item.component";
import LoginComponent from "./pages/login/login.component";
import React, { useReducer } from "react";
import Test from "./pages/test/test.component";
import UserProvider from "./components/providers/user-provider";
import Guard from "./components/core/guard/guard.component";

const initialState = [];
function App() {

  /**
   * 
   * @param {Array<
   * {
   * id: number;
   * name: string;
   * description: string;
   * ingredients: string[];
   * price: number;
   * category: string;
   * image: string;
   * }>} cart 
   * @param {*} action 
   */
  const reducer = (cart, action) => {
    // This function updates the state
    // eslint-disable-next-line default-case
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
    <div>
      <BrowserRouter>
        <UserProvider>
          <Guard component='header'><Header cart={cart} /></Guard>
          <Routes>
            <Route path="/" element={<Navigate to='/view' replace />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/add" element={<Guard component='add' permittedRoles={['ADMIN']}><AddPage /></Guard>} />
            <Route path="/view" element={<View dispatch={dispatch} />} />
            <Route path="/view/:id" element={<ViewItem />} />
            <Route path="/404" element={<Test />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
