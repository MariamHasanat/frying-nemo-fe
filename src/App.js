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
    const [userName, setuserName] = useState(null);
    return (
        <div>
            <BrowserRouter>
                <Header userName={userName} />
                <Routes>
                    <Route path="/login" element={<Login userName={userName} setuserName={setuserName} />} replace />
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