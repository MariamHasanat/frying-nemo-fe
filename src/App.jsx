import React from "react";
import Header from "./components/core/header/header.component";
import AddPage from "./pages/add/add.component";
import ViewPage from "./pages/view/view.component";
import ViewItemPage from "./pages/view-item/view-item.component";
import NotFoundPage from "./pages/not-found/not-found.component";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./pages/login/login.component";
import UserProvider from "./components/providers/user-provider.component";

function App() {
  return (
    <div>
      <BrowserRouter>
      <UserProvider>
        <Header  />
        <Routes>
          <Route path="/" element={<Navigate to="/view" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/add" element={<AddPage  />} />
          <Route path="/view" element={<ViewPage  />} />
          <Route path="/view-details/:id" element={<ViewItemPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
