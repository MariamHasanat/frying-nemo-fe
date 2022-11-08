import React, { useState } from "react";
import Handel from "./components/header/header";
import AddPage from "./pages/add/add/add.component";

import NotFound from "./pages/add/not-found/not-found";
import View from "./pages/add/view/view";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ViewItemPage from "./pages/add/viewitempage/viewitempage";
import LoginPage from "./pages/add/login/login";

export const UserContext = React.createContext(null);//قراءة ااذا فش قيمة 
function App() {
  // const path = window.location.pathname;
  // console.log(path);
  // let page = null;
  // if (path === '/add')
  //   page = <AddPage />
  // else if (path === '/view')
  //   page = <View />
  // else page = <NotFound />


  const initialUser = JSON.parse(sessionStorage.getItem('user'));
  const [user, setUser] = useState(initialUser);
  const setUserOver = (user) => {
    setUser(user);
    sessionStorage.setItem('user', JSON.stringify(user));
  };
  return (
    <div>
      <BrowserRouter >
        <UserContext.Provider value={{ user, setUser: setUserOver }}>
          <Handel user={user} setUser={setUserOver} />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Navigate to="view" />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/view" element={<View />} />
            <Route path="/view/:id" element={<ViewItemPage />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
