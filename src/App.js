import AddPage from "./pages/add/add.component";
import ViewPage from "./common/view/view.component";
import Header from './common/header/header.component';
import React,{useReducer} from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NotFoundPage from "./pages/add/not_found/not-found";
import ViewItemPage from "./common/view/view-item/item.component";
import LoginPage from "./pages/add/log-in/login.component";
import UserProvider from "./components/provider/provider.component";
import Guard from './components/guard/guard.component';

const initial = [];

function App() {

    const reducer = (cart, action) => {
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

    const [cart, dispatch] = useReducer(reducer, initial);

  return (
    <div>
     <UserProvider>
        <BrowserRouter>
          <Header cart={cart} />
          <Routes>
            <Route path="/" element={<Navigate to="/view" replace />} />
              <Route path="/add/*" element={<Guard permittedRoles={['ADMIN']} ><AddPage /> </Guard>} />
            <Route path="/view" element={<ViewPage dispatch={dispatch}/>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/view/:id" element={<ViewItemPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
        </UserProvider>
    </div>
  );
}

export default App;

