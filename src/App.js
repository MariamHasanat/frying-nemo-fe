import AddPage from "./pages/add/add.component";
import ViewPage from "./common/view/view.component";
import Header from './common/header/header.component';
import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NotFoundPage from "./pages/add/not_found/not-found";
import ViewItemPage from "./common/view/view-item/item.component";
import LoginPage from "./pages/add/log-in/login.component";

function App() {
  const initialUser = JSON.parse(sessionStorage.getItem('user'));
  const [user, setUser] = useState(initialUser);

  const setUserOverride = user=>{
    setUser(user);
    sessionStorage.setItem('user',JSON.stringify(user));
  }
  return (
    <div>
      <BrowserRouter>
        <Header user={user} setUser={setUserOverride} />
        <Routes>
          <Route path="/" element={<Navigate to ="/view" replace/>} />
          <Route path="/add/*" element={<AddPage user={user} />} />
          <Route path="/view" element={<ViewPage user={user} />} />
          <Route path="/login" element={<LoginPage user={user} setUser={setUserOverride} />} />
          <Route path="/view/:id" element={<ViewItemPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

