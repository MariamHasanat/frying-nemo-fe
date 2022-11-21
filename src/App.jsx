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
import { useReducer } from "react";
import { reducer } from './reducers/cart';
import Cart from "./pages/cart/cart.page";

function App() {

    const [cart, dispatch] = useReducer(reducer, []);
    return (
        <div>
            <UserProvider>
                <BrowserRouter>
                    <Header cart={cart} />
                    <Routes>
                        <Route path="/login" element={<Login />} replace />
                        <Route path="/" element={<Navigate to='/view' />} replace />
                        <Route path="/add" element={<Guard authorized={['ADMIN']}><AddPage /></Guard>} />
                        <Route path="/view" element={<ViewPage dispatch={dispatch} cart={cart} />} />
                        <Route path="/*" element={<NotFound />} />
                        <Route path="/view/:id" element={<ViewItemPage dispatch={dispatch} cart={cart} />} />
                        <Route path="/cart" element={<Cart cart={cart} />} />
                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </div >
    );
};

export default App;