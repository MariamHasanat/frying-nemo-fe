import React, { createContext, useState } from "react";
import AddPage from "./pages/add/add.component";
import NotFoundPage from "./pages/not-found/notfound-component";
import ViewPage from "./pages/view/view.component";
import Header from "./components/core/header/header.component";
import ViewItemPage from "./pages/view-item/view-item.component";
import LoginPage from "./pages/login/login.component";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WithBorders from "./components/common/with-borders/with-borders.component";
import UserProvider from "./components/user-provider/user-provider";
// import Guard from '../src/components/common/';
import Guard from "./components/core/guard/guard.component";

function App() {
  return (
    <div>
      <UserProvider>
        <BrowserRouter>
          <WithBorders>
            <Header />
            <Routes>
              <Route path="/" element={<Navigate to="/view" replace />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/add" element={<Guard><AddPage permittedRoles={['ADMIN']}/></Guard>} />
              <Route path="/view" element={<ViewPage />} />
              <Route path="/view-details/:id" element={<ViewItemPage />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </WithBorders>
        </BrowserRouter>
      </UserProvider>
    </div >
  );
}

export default App;
