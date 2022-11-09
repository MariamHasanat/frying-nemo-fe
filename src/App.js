import AddPage from "./pages/add/add/add.component";
import Header from "./components/core/header/header.component";
import ViewPage from "./pages/add/view/view.component";
import NotFound from "./pages/add/not-found/not-found.component";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import ViewItemPage from "./pages/add/view/view-item/view-item.component";
import LoginPage from "./pages/add/login/login.component";
import React, { useState } from "react";


export const UserContext = React.createContext(null);



function App() {
const initialUser = JSON.parse(sessionStorage.getItem('user'));
const [user, setUser] =useState(initialUser);

const setUserOverride = user=>{
setUser(user);
sessionStorage.setItem('user', JSON.stringify(user))
}
  return (
    <UserContext.Provider value={{user, setUser: setUserOverride}}>
    <div>
      <BrowserRouter>
        <Header />
          <Routes >
            <Route path="/" element={<Navigate to="/view" replace/>}/>
            <Route path="/add" element={<AddPage />} />
            <Route path="/view" element={<ViewPage user={user} />}></Route>
            <Route path="/view-details/:id" element={<ViewItemPage />} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/*" element={<NotFound/>}/>
            
          </Routes>
          </BrowserRouter>
      </div>
      </UserContext.Provider>
    

  );
}
export default App;


