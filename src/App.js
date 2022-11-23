import { useReducer, useState } from "react";
import NotFoundPage from "./components/not-found/not-found/not-found";
import AddPage from "./pages/add/add.component";
import ViewPage from "./components/view/view.component";
import Header from "./components/header/header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ViewItemPage from "./components/view-item/view-item.component";
import LoginPage from "./components/login-page/login-page.componen";
import React from "react";
import UserProvider from "./components/provider/provider.component";
import Guard from "./components/guard/guard.component";
import { reducer, initialState } from "./components/reducer/reducer";
import CartPage from "./components/cart-page/cart-page.component";


function App() {

  const [cart, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <UserProvider>
        <BrowserRouter>
          <Header cart={cart} />
          <Routes>
            <Route path="/" element={<Navigate to='/view' replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/add" element={<Guard permittedRoles={['ADMIN']}><AddPage /></Guard>} />
            <Route path="/view" element={<ViewPage dispatch={dispatch} cart={cart}/>} />
            <Route path="/view-details/:id" element={<ViewItemPage dispatch={dispatch} cart={cart} />} />
            <Route path="/cart" element={<CartPage dispatch={dispatch} cart={cart} />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}
export default App;
