import React from "react";
import AddPage from "./pages/add/add.component";
import Header from "./components/header/header.component";
import ViewPage from "./pages/view/view.component";
import ViewItemPage from "./pages/view-item/view-item.component";
import NotFoundPage from "./pages/not-found/not-found.component";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./pages/login/login.component";
import UserProvider from './components/providers/user-provider.component';
import Guard from './components/common/guard/guard.component';
import CartProvider from "./components/providers/cart-provider.component";
import CartPage from "./pages/cart/cart.page";
import UpdatePage from "./pages/update/update.component";

function App() {


  return (

    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/view" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/add" element={<Guard permittedRoles={['ADMIN']}><AddPage /></Guard>} />
            <Route path="/update/:id" element={<Guard permittedRoles={['ADMIN']} ><UpdatePage /></Guard>} />
            <Route path="/view" element={<ViewPage />} />
            <Route path="/view-details/:id" element={<ViewItemPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </UserProvider>

  );
}

export default App;
