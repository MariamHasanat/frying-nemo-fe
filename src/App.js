import AddPage from "./pages/add/add/add.component";
import Header from "./components/core/header/header.component";
import ViewPage from "./pages/add/view/view.component";
import NotFound from "./pages/add/not-found/not-found.component";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import ViewItemPage from "./pages/add/view/view-item/view-item.component";
import LoginPage from "./pages/add/login/login.component";
import { useState } from "react";



function App() {
const initialUser = JSON.parse(sessionStorage.getItem('user'));
const [user, setUser] =useState(initialUser);

const setUserOverride = user=>{
setUser(user);
sessionStorage.setItem('user', JSON.stringify(user))
}
  return (
    <div>
      <BrowserRouter>
        <Header />
          <Routes >
            <Route path="/" element={<Navigate to="/view" />}></Route>
            <Route path="/add" element={<AddPage />}></Route>
            <Route path="/view" element={<ViewPage user={user} />}></Route>
            <Route path="/view-details/:id" element={<ViewItemPage user={user}/>}></Route>
            <Route path="/login" element={<LoginPage user={user} setUser={setUserOverride}/>}></Route>
            <Route path="/*" element={<NotFound/>}></Route>
            
          </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;


