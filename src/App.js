import AddPage from "./pages/add/add.component";
import View from "./pages/view/view";
import Header from "./core/header/header.component";
import NotFound from "./pages/not-found/not-found.component";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ViewItemPage from "./pages/view-item-page/view-item-page";
import LogIn from "./pages/login/login.component";
import React, { useState } from "react";

export const UserContext = React.createContext(null);

function App() {
    const initialUser = JSON.parse(sessionStorage.getItem('user'));
    const [user, setUser] = useState(initialUser);
    const setUserOverride = (user) => {
        setUser(user);
        sessionStorage.setItem('user', JSON.stringify(user));
    };
    return (
        <UserContext.Provider value={{ user, setUser: setUserOverride }}>
            <div>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Navigate to={"/log-in"} replace />} />
                        <Route path="/log-in" element={<LogIn />} />
                        <Route path="/add" element={<AddPage />} />
                        <Route path="/view" element={<View />} />
                        <Route path="/view-details/:id" element={<ViewItemPage />} />
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </UserContext.Provider>
    );
}

export default App;
