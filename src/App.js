import React, { useReducer } from "react";
import AddPage from "./pages/add/add.component";
import View from "./pages/view/view";
import Header from "./core/header/header.component";
import NotFound from "./pages/not-found/not-found.component";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ViewItemPage from "./pages/view-item-page/view-item-page";
import LogIn from "./pages/login/login.component";
import UserProvider from './components/providers/user-provider.component.jsx';
import Guard from "./core/guard/guard.component";
import { reduce } from "./services/reducer-for-edit-item";

const App = (props) => {
    
    const [cart, patcher] = useReducer(reduce, []);

    return (
        <div>
            <UserProvider>
                <BrowserRouter>
                    <Header cart={cart} />
                    <Routes>
                        <Route path="/" element={<Navigate to={"/log-in"} replace />} />
                        <Route path="/log-in" element={<LogIn />} />
                        <Route path="/add" element={<Guard premmitedRoles={['ADMIN']}><AddPage /></Guard>} />
                        <Route path="/view" element={<View />} />
                        <Route path="/view-details/:id" element={<ViewItemPage />} />
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>

            </UserProvider>
        </div>
    );
};

export default App;
