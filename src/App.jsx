import React from "react";
import { useState } from "react";
import AddPage from "./pages/add/add.component";
import Header from "./components/common/header/header.component";
import ViewPage from "./components/view/view.component";
import ErorrPage from "./components/error/error.compopnent";
import LoginPage from "./pages/login/login.component";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import ViewItemPage from "./pages/view-item/view-item.component";
export const UserContext = React.createContext(null);

function App() {
  const initialUser = JSON.parse(sessionStorage.getItem('user'));
  const [user, setUser] = useState(initialUser);

  const setUserOverride = user => {
    setUser(user);
    sessionStorage.setItem('user', JSON.stringify(user));
  };

  return (
    <div>
      <BrowserRouter>
      <Header user={user} /> 
        <Routes>
          <Route path="/view-item/:id" element={<ViewItemPage />} />
          <Route path="/login" element={<LoginPage user={user} setUser={setUserOverride} />} />
          <Route path="/add" element={<AddPage user={user} />} />
          <Route path="/view" element={<ViewPage user={user} />} />
          <Route path="/" element={<Navigate to="/view" replace />} />
          <Route path="/*" element={<ErorrPage />} />
        </Routes>
      </BrowserRouter>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
