import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import UserProvider from './components/add/form/provider/UserProvider';
import ViewItemPage from './pages/view/ViewItem/ViewItemPage';
import Notfound from "./pages/not-found/Notfound";
import AddPage from "./pages/add/add.component";
import LoginPage from './pages/login/LoginPage';
import ViewPage from "./pages/view/ViewPage";
import Header from "./logo/Header";
import React, { useReducer } from 'react';
import './common.css';
import Guard from './pages/Guard/Guard';

let intialState = [];

function App() {

  const reducer = (action , cart) => {
    switch (action.type) {

      case 'Increment': {
        let found = false;
        const newCart = cart.map(cartItem => {
          console.log(cartItem)
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
        else {
          return newCart;
        }

      }
      case 'Decrement':{
        let shouldDelete = false;
        const newCart = cart.map((cartItem) => {
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
      else {
        return newCart;

      }
       }
       default : break;
      }
      
    }
  
  const [cart , dispatch] = useReducer(reducer , intialState);

  return (
    <UserProvider>
        <BrowserRouter>
          <Header cart={cart} />
          <Routes>
            <Route path="/" element={<Navigate to='/view' replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/add" element={
            <Guard  permittedRole={['ADMIN']}>
              <AddPage />
            </Guard>
            } />
            <Route path="/view" element={<ViewPage dispatch={dispatch}/>} />
            <Route path="/view/:id" element={<ViewItemPage dispatch={dispatch}/>} />
            <Route path="/*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
    </UserProvider>

  );
}

export default App;
