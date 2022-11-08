import React, { useState } from "react";
import Header from "./components/core/header/header.component";
import AddPage from "./pages/add/add.component";
import ViewPage from "./pages/view/view.component";
import ViewDetailsPage from "./pages/view-details/view-details.component";
import NotFoundPage from "./pages/not-found/not-found.component";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./pages/login/login.component";

export const UserContext = React.createContext(null)

function App() {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const updateUser = (user) => {
    setUser(user)
    sessionStorage.setItem('user', JSON.stringify(user))
  }

  console.log(user)
  return (
    <div>
      <BrowserRouter>
      <UserContext.Provider value={{user, setUser: updateUser}}>
        <Header/>
          <Routes>
            <Route path="/" element={<Navigate to="/view" replace />} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/view" element={<ViewPage />} />
            <Route path="/view/:id" element={<ViewDetailsPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
      </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;