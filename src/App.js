import React from "react";
import Header from "./components/core/header/header.component";
import AddPage from "./pages/add/add.component";
import NotFound from "./pages/page not found/page-not-found.component";
import ViewPage from "./pages/view/view.component";
import ViewItemPage from "./pages/view-item/view-item.component";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./pages/login/login.component";
import { useState } from "react";
export const UserContext = React.createContext(null);
function App() {
  const initialUser = JSON.parse(sessionStorage.getItem('user'));
  const [user, setUser] = useState(initialUser);
  const setUserOverride = user => {
    setUser(user);
    sessionStorage.setItem('user', JSON.stringify(user));
  };
  return (

 

<UserContext.Provider value={{ user, setUser: setUserOverride }}>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/view" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/view" element={<ViewPage />} />
            <Route path="/view/:id" element={<ViewItemPage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext.Provider>

  );
}

export default App;

