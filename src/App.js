import { useReducer, useState } from "react";
import NotFoundPage from "./components/not-found/not-found/not-found";
import AddPage from "./pages/add/add.component";
import ViewPage from "./pages/view/view.component";
import Header from "./components/header/header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ViewItemPage from "./pages/view-item/view-item.component";
import LoginPage from "./pages/login-page/login-page.componen";
import React from "react";
import UserProvider from "./components/providers/provider.component";
import Guard from "./components/guard/guard.component";
import CartPage from "./components/cart-page/cart-page.component";
import CartProvider from "./components/providers/cart-provider.component";


function App() {
  return (
    <div>
      <UserProvider>
        <CartProvider>
          <BrowserRouter>
            <Header/>
            <Routes>
              <Route path="/" element={<Navigate to='/view' replace />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/add" element={<Guard permittedRoles={['ADMIN']}><AddPage /></Guard>} />
              <Route path="/view" element={<ViewPage />} />
              <Route path="/view-details/:id" element={<ViewItemPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </UserProvider>
    </div>
  );
}
export default App;
