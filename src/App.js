import AddPage from "./pages/add/add.component";
import ViewPage from "./pages/view/view.component";
import ViewItemPage from "./pages/view-item/view-item.component";
import Header from "./components/core/header/header.component";
import NotFound from "./pages/not-found/not-found.component";
import Login from "./pages/login/login.component";
import { useState } from "react";
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')));
    const setUserOverride = user => {
        setUser(user);
        sessionStorage.setItem('user', JSON.stringify(user));
    }
    return (
        <div>
            <BrowserRouter>
                <Header user={user} />
                <Routes>
                    <Route path="/login" element={<Login user={user} setUser={setUserOverride} />} replace />
                    <Route path="/" element={<Navigate to='/view' />} replace />
                    <Route path="/add" element={<AddPage />} />
                    <Route path="/view" element={<ViewPage />} />
                    <Route path="/*" element={<NotFound />} />
                    <Route path="/view/:id" element={<ViewItemPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;