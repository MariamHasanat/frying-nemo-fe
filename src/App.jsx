import AddPage from "./pages/add/add.component";
import ViewPage from "./pages/view/view.component";
import ViewItemPage from "./pages/view-item/view-item.component";
import Header from "./components/core/header/header.component";
import NotFound from "./pages/not-found/not-found.component";
import Login from "./pages/login/login.component";
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React from "react";
import UserProvider from "./components/providers/user-provider.component";
import Guard from "./components/guard/guard.component";
import { useReducer } from "react";

function App() {
    const reducer = (cart, action) => {
        // if (action.type === 'add_new_item')
        return [...cart, { meal: action.meal, quantity: 1 }];

    };

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
                        <Route path="/view" element={<ViewPage />} dispatch={dispatch} />
                        <Route path="/*" element={<NotFound />} />
                        <Route path="/view/:id" element={<ViewItemPage />} />
                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </div >
    );
};

export default App;