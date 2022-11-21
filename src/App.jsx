import React ,{ useState } from "react";
import AddPage from "./pages/add/add.component";
import Header from "./components/common/header/header.component";
import ViewPage from "./components/view/view.component";
import ErorrPage from "./components/error/error.compopnent";
import LoginPage from "./pages/login/login.component";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import ViewItemPage from "./pages/view-item/view-item.component";
import UserProvider from "./components/providers/user-provider.component";

export const UserContext = React.createContext(null);

function App() {

  return (
    <UserProvider>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/view" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/view" element={<ViewPage />} />
            <Route path="/view-details/:id" element={<ViewItemPage />} />
            <Route path="/*" element={<ErorrPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserProvider>
  );

}

export default App;
