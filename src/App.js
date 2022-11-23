import React from "react";
import Header from "./components/core/header/header.component";
import AddPage from "./pages/add/add.component";
import NotFound from "./pages/page not found/page-not-found.component";
import ViewPage from "./pages/view/view.page";
import ViewItemPage from "./pages/view-item/view-item.page";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CartProvider from "./components/providers/cart-provider.component";
import LoginPage from "./pages/login/login.page";
import CartPage from "./pages/cart/cart.page";



function App() {



  return (



 <CartProvider>
  
      <div>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Navigate to="/view" replace />} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/view" element={<ViewPage/>} />
            <Route path="/view/:id" element={<ViewItemPage  />}/>
            <Route path="/cart" element={<CartPage />}/>
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
      </CartProvider>
  );
}

export default App;

