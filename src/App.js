import React, { useState } from "react";
import Handel from "./components/header/header";
import AddPage from "./pages/add/add/add.component";
import NotFound from "./pages/add/not-found/not-found";
import View from "./pages/add/view/view";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ViewItemPage from "./pages/add/viewitempage/viewitempage";
import LoginPage from "./pages/add/login/login";
import Providers from "./components/provider/provider";
import Guard from "./components/guard/guard";
import CartPage from "./pages/cart/cart/cart";
import CartProviders from "./components/provider/cartprovider";

function App() {

  return (
    <div>
      <BrowserRouter >
        <Providers>
          <CartProviders>
            <Handel />
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<Navigate to="view" />} />
              <Route path="/*" element={<NotFound />} />
              <Route path="/add" element={<Guard permittedRoles={['ADMIN']} ><AddPage /></Guard>} />
              <Route path="/view" element={<View />} />
              <Route path="/view/:id" element={<ViewItemPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </CartProviders>
        </Providers>
      </BrowserRouter>
    </div>
  );
}

export default App;
