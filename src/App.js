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
import {reducer , initial} from './reducer/cart';
import CartPage from "./components/cart/cart-page";
import CartProvider from "./components/provider/cart-provider.component";

 function App() {




  return (
    <div>
     <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/view" replace />} />
              <Route path="/add/*" element={<Guard permittedRoles={['ADMIN']} ><AddPage /> </Guard>} />
            <Route path="/view" element={<ViewPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/view/:id" element={<ViewItemPage />} />
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

