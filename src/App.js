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
import { reducer ,initialState} from "./reducers/cart";
import CartPage from "./pages/cart/cart-page";


function App() {

  // actions : add, delete and update
  // Cart is an array of items
  // each item : meal + quantity 
  

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
              <Route path="/add" element={<Guard permittedRoles={['ADMIN']} ><AddPage /></Guard>} />
              <Route path="/view" element={<ViewPage dispatch={dispatch} cart={cart} />} />
              <Route path="/cart" element={<CartPage dispatch={dispatch} cart={cart} />} />
              <Route path="/view-details/:id" element={<ViewItemPage dispatch={dispatch}  cart={cart} />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </WithBorders>
        </BrowserRouter>
      </UserProvider>
    </div >
  );
}

export default App;
