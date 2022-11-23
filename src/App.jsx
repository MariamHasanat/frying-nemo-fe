import AddPage from "./pages/add/add.page";
import ViewPage from "./pages/view/view.page";
import ViewItemPage from "./pages/view-item/view-item.page";
import Header from "./components/core/header/header.component";
import NotFound from "./pages/not-found/not-found.page";
import Login from "./pages/login/login.page";
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React from "react";
import UserProvider from "./components/providers/user-provider.component";
import Guard from "./components/guard/guard.component";
import CartProvider from "./components/providers/cart-provider.component";

function App() {
    return (
        <div>
            <UserProvider>
                <CartProvider>
                    <BrowserRouter>
                        <Header/>
                        <Routes>
                            <Route path="/login" element={<Login />} replace />
                            <Route path="/" element={<Navigate to='/view' />} replace />
                            <Route path="/add" element={<Guard authorized={['ADMIN']}><AddPage /></Guard>} />
                            <Route path="/view" element={<ViewPage />} />
                            <Route path="/*" element={<NotFound />} />
                            {/* <Route path="/view/:id" element={<ViewItemPage dispatch={dispatch} cart={cart} />} /> */}
                            {/* <Route path="/cart" element={<Cart dispatch={dispatch} cart={cart} />} /> */}
                        </Routes>
                    </BrowserRouter>
                </CartProvider>
            </UserProvider>
        </div >
    );
};

export default App;