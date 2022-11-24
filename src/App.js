import AddPage from "./pages/add/add/add.component";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import ViewItemPage from "./pages/view-item/view-item.component";
import LoginPage from "./pages/add/login/login.component";
import Header from "./components/core/header/header.component";
import NotFound from "./pages/add/not-found/not-found.component";
import UserProvider from "./components/provider/user-provider.component";
import CartProvider from "./components/provider/cart.provider";
import ViewPage from "./pages/add/view/view.page"
import React from "react";


function App() {



  return (
    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <Header  />
          <Routes >
            <Route path="/" element={<Navigate to="/view" replace />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/view" element={<ViewPage/>}></Route>
            <Route path="/view-details/:id" element={<ViewItemPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </UserProvider>


  );
}
export default App;


