import { useState } from "react";
import NotFoundPage from "./components/not-found/not-found/not-found";
import AddPage from "./components/pages/add/add.component";
import ViewPage from "./components/view/view.component";
import Header from "./components/header/header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ViewItemPage from "./components/view-item/view-item.component";
import LoginPage from "./components/login-page/login-page.componen";
import React from "react";

const userContext = React.createContext(null);

function App() {

  const initializeUser = JSON.parse(sessionStorage.getItem('user'));
  const [user, setUser] = useState(initializeUser);

  const overrideSetUser = user => {
    setUser(user);
    sessionStorage.setItem('user', JSON.stringify(user));
  };

  return (
    <div>
      <BrowserRouter>
        <Header user={user} setUser={setUser} />
        <userContext.Provider value={{user, setUser:overrideSetUser}}>
        <Routes>
          <Route path="/" element={<Navigate to='/view' replace />} />
          <Route path="/login" element={<LoginPage user={user} setUser={overrideSetUser} />} />
          <Route path="/add" element={<AddPage user={user} />} />
          <Route path="/view" element={<ViewPage user={user} />} />
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="/view-details/:id" element={<ViewItemPage />} />
        </Routes>
        </userContext.Provider>
      </BrowserRouter>

    </div>
  );
}
export default App;

export {
  userContext
};
