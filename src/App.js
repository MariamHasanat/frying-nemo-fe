import Header from "./components/common/header/header.component";
import View from "./pages/view/view";
import '../src/pages/add/add.component';
import AddPage from "../src/pages/add/add.component";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ViewItem from "./pages/view-item/view-item.component";
import LoginComponent from "./pages/login/login.component";
import React, { useState } from "react";
import Test from "./pages/test/test.component";

export const UserContext = React.createContext(null);

function App() {



  const initialUser = JSON.parse(sessionStorage.getItem('user'));
  const [user, setUser] = useState(initialUser);

  const setOverrideUser = user => {
    setUser(user);
    sessionStorage.setItem('user', JSON.stringify(user));
  };


  return (
    <div>
      <BrowserRouter>
        <Header user={user} setUser={setOverrideUser} />

        <UserContext>

          <Routes>
            <Route path="/" element={<Navigate to='/view' replace />} />
            <Route path="/login" element={<LoginComponent user={user} setUser={setOverrideUser} />} />
            <Route path="/add" element={<AddPage user={user} />} />
            <Route path="/view" element={<View user={user} />} />
            <Route path="/view/:id" element={<ViewItem />} />
            <Route path="/404" element={<Test />} />
          </Routes>
        </UserContext>
      </BrowserRouter>


    </div>
  );
}

export default App;
