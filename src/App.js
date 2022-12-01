/* eslint-disable default-case */
import AddPage from "./pages/add/add.component";
import "./common.css";
import React from "react";
import Addveiw from "./pages/veiw/veiw.component";
import Header from "./components/core/header/header.component";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddveiwItem from "./pages/veiwItem/veiw-item.component";
import LoginPage from "./pages/login/login.component";
import UseProvider from "./components/providers/user.provider.component";
import CartPage from "./pages/cart/cart.component";
import CartProvider from "./components/providers/cart.provider.component";


function App() {
  return (
    <UseProvider>
      <div>
        <CartProvider>
           <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/view" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/cart" element={<CartPage  />} />
            <Route path="/view" element={<Addveiw />} />
            <Route path="/view-details/:id" element={<AddveiwItem />} />
          </Routes>
        </BrowserRouter>
        </CartProvider>
       
      </div>
    </UseProvider>
  );
}

export default App;
