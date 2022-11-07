import AddPage from "./pages/add/add.component";
import View from "./pages/view/view";
import Header from "./core/header/header.component";
import NotFound from "./pages/not-found/not-found.component";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ViewItemPage from "./pages/view-item-page/view-item-page";
import LogIn from "./pages/login/login.component";
import { useState } from "react";


function App() {
    const [user, setUser] = useState(null);
    return (
        <div>
            <BrowserRouter>
                <Header user={user} />
                <Routes>
                    <Route path="/" element={<Navigate to={"/log-in"} replace />} />
                    <Route path="/log-in" element={<LogIn user={user} setUser={setUser} />} />
                    <Route path="/add" element={<AddPage user={user} />} />
                    <Route path="/view" element={<View user={user} />} />
                    <Route path="/view-details/:id" element={<ViewItemPage />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
