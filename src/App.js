import Header from "./components/core/header/header.component";
import AddPage from "./pages/add/add.component";
import ViewPage from "./pages/view/view.component";
import './common.css';
import NotFound from "./pages/not-found/notFound.component";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SingleItem from "./pages/single-item/single-item.component";
import LoginPage from "./pages/login/login.component";
import UserProvider from "./components/providers/user-provider.component";
import Guard from "./components/providers/guard-provider.component";
import React from "react";
import Cart from "./pages/cart/cart.component";
import CartProvider from "./components/providers/cart-provider.component";

function App() {

  /**
   * @type {[]}
   */ 
  return (
    <div>
      <BrowserRouter >
        <UserProvider>
          <CartProvider>
            <Header
              img="./nemo.svg.svg"
              title="Frying Nemo"
            />
            <Routes>
              <Route path="/" element={<Navigate to='/view' replace />} />   {/* page redirection using navigate component , which is built in react router dom library */}
              <Route path="/add" element={<Guard permittedRoles={['ADMIN']} ><AddPage /></Guard>} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/view" element={<ViewPage />} />
              <Route path="/view-details/:id" element={<SingleItem  />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </CartProvider>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
