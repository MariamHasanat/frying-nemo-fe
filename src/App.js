import React from "react";
import AddPage from "./pages/add/add.page";
import View from "./pages/view/view.page";
import Header from "./components/core/header/header.component";
import NotFound from "./pages/not-found/not-found.page";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ViewItemPage from "./pages/view-item-page/view-item.page";
import LogIn from "./pages/login/login.page";
import Cart from './pages/cart/cart.page';
import UserProvider from './components/providers/user-provider.component.jsx';
import Guard from "./components/core/guard/guard.component";
import CartProvider from "./components/providers/cart-provider.component";


const App = () => {

    return (
        <div>
            <UserProvider>
                <CartProvider>
                    <BrowserRouter>
                        <Header />
                        <Routes>
                            <Route path="/" element={<Navigate to={"/log-in"} replace />} />
                            <Route path="/log-in" element={<LogIn />} />
                            <Route path="/add" element={<Guard premmitedRoles={['ADMIN']}><AddPage /></Guard>} />
                            <Route path="/view" element={<View />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/view-details/:id" element={<ViewItemPage />} />
                            <Route path="/*" element={<NotFound />} />
                        </Routes>
                    </BrowserRouter>
                </CartProvider>
            </UserProvider>
        </div>
    );
};

export default App;
