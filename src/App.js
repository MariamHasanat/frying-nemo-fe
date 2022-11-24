import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import Header from "./components/core/header/header.component";
import View from "./pages/view/view.page";
import AddPage from "./pages/add/add.page";
import ViewItem from "./pages/view-item/view-item.page";
import LoginComponent from "./pages/login/login.page";
import Test from "./pages/test/test.page";
import UserProvider from "./components/providers/user-provider";
import Guard from "./components/core/guard/guard.component";
import CartPage from "./pages/cart/cart.page";
import CartProvider from "./components/providers/cart-provider";
import './App.css';
function App() {

  /**
   * 
   * @param {Array<
   * {
   * id: number;
   * name: string;
   * description: string;
   * ingredients: string[];
   * price: number;
   * category: string;
   * image: string;
   * }>} cart 
   * @param {*} action 
   */


  return (
    <div>
      <BrowserRouter>
        <UserProvider>
          <CartProvider>
            <Header />
            <div className="body">
              <Routes>
                <Route path="/" element={<Navigate to='/view' replace />} />
                <Route path="/login" element={<LoginComponent />} />
                <Route path="/add" element={<Guard component='add' permittedRoles={['ADMIN']}><AddPage /></Guard>} />
                <Route path="/view" element={<View />} />
                <Route path="/view/:id" element={<ViewItem />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/404" element={<Test />} />
              </Routes>
            </div>
          </CartProvider>
        </UserProvider>

      </BrowserRouter>
    </div >
  );
}

export default App;
