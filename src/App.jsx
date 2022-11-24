import React from "react";
import AddPage from "./pages/add/add.component";
import Header from "./components/common/header/header.component";
import ViewPage from "./components/view/view.component";
import ErorrPage from "./components/error/error.compopnent";
import LoginPage from "./pages/login/login.component";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import ViewItemPage from "./pages/view-item/view-item.component";
import UserProvider from "./components/providers/user-provider.component";
import Guard from "./components/core/guard/guard.component";
import CartPage from "./pages/cart/cart.page";
import CartProvider from "./components/providers/cart-provider.component";

function App() {



  return (
    <UserProvider>
      <CartProvider>
        <div className="app-body">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Navigate to="/view" replace />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/add" element={<Guard permittedRoles={['ADMIN']}><AddPage /></Guard>} />
              <Route path="/view" element={<ViewPage />} />
              <Route path="/view-item/:id" element={<ViewItemPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/*" element={<ErorrPage />} />
            </Routes>
          </BrowserRouter>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      </CartProvider>
    </UserProvider>
  );

}

export default App;
