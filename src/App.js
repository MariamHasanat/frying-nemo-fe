import AddPage from "./pages/add/add.component";
import ViewPage from "./common/view/view.component";
import Header from './common/header/header.component';
import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NotFoundPage from "./pages/add/not_found/not-found";
import ViewItemPage from "./common/view/view-item/item.component";
import LoginPage from "./pages/add/log-in/login.component";
import WithBorder from "./common/with-borders/with-borders.component";
import UserProvider from "./components/provider/provider.component";


function App() {

  return (
    <div>
     <UserProvider>
        <WithBorder>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/view" replace />} />
            <Route path="/add/*" element={<AddPage />} />
            <Route path="/view" element={<ViewPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/view/:id" element={<ViewItemPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
        </WithBorder>
        </UserProvider>
    </div>
  );
}

export default App;

