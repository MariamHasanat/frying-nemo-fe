import Header from "./components/common/header/header.component";
import View from "./pages/view/view";
import '../src/pages/add/add.component';
import AddPage from "../src/pages/add/add.component";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ViewItem from "./pages/view-item/view-item.component";
import LoginComponent from "./pages/login/login.component";
import React from "react";
import Test from "./pages/test/test.component";
import UserProvider from "./components/providers/user-provider";
import Guard from "./components/core/guard.compoenet";


function App() {

  return (
    <div>
      <BrowserRouter>
        <UserProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to='/view' replace />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/add" element={<Guard permittedRoles={['ADMIN']}><AddPage /></Guard>} />
            <Route path="/view" element={<View />} />
            <Route path="/view/:id" element={<ViewItem />} />
            <Route path="/404" element={<Test />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
