// import { useState } from "react";

import Head from "./components/pop/header";
import AddPage from "./pages/add/add.component";
import NotFound from "./pages/not-found/notfound";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ViewPage from "./pages/view/view";
import ViewItemPage from "./pages/veiw-item/view-item";
import './App.css';
import Login from "./pages/login/login";
import React, { useState } from "react";


//tp pass the user to all routes without send  it as props to all children 

export const UserContext = React.createContext(null);

function App() {

  const initialUser = JSON.parse(sessionStorage.getItem('user'));
  const [user, setUser] = useState(initialUser);


  const saveUser = user => {
    setUser(user);
    sessionStorage.setItem("user", JSON.stringify(user));


  };


  return (
    <div>

      <BrowserRouter>
        <Head user={user} setUser={saveUser} />
        <UserContext.provider value={{ user, setUser: saveUser }}>
          <Routes>
            <Route path="/add" element={<AddPage  />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/view/:id" element={<ViewItemPage />} />
            <Route path="/view" element={<ViewPage />} />
            <Route path="/" element={<Navigate to='/view' replace />} />
            <Route path="/login" element={<Login  />} />
            {/* <Route path="/*" element={<Navigate to='/add' />} /> */}
          </Routes>
        </UserContext.provider>
      </BrowserRouter>
    </div >
  );
}

export default App;