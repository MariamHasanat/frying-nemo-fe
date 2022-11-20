/* never forget your friend (alt+shift+f) */

// Here we import the components
import React, { useReducer } from "react";
import AddPage from "./pages/menuPageContainer/page.container";
import Header from "./components/header/header.component";
import ViewPage from "./pages/view/view.container";
import NotFound from "./pages/not-found/not-found.component";
import ViewItemPage from "./pages/view-item/view.item";
import LoginPage from "./pages/login/login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserProvider from "./components/user-provider/user-provider";
import Guard from "./components/core/guard/guard";

const initialState = [];

//A function App will render the components
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
    <div className="pages-container">
      <div className="consistancy-between-pages">
        <UserProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Navigate to="/view" replace />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/add" element={<Guard permittedRoles={["ADMIN"]}><AddPage /></Guard>} />
              <Route path="/view" element={<ViewPage dispatch={dispatch} />} />
              <Route path="/view/:id" element={<ViewItemPage />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </div>
    </div>
  );
}

export default App;

