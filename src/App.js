import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import WithBorder from './components/add/form/with-border/WithBorder';
import UserProvider from './components/add/form/provider/UserProvider';
import ViewItemPage from './pages/view/ViewItem/ViewItemPage';
import Notfound from "./pages/not-found/Notfound";
import AddPage from "./pages/add/add.component";
import LoginPage from './pages/login/LoginPage';
import ViewPage from "./pages/view/ViewPage";
import Header from "./logo/Header";
import React from 'react';
import './common.css';

function App() {
  return (
    <UserProvider>
      <WithBorder>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to='/view' replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/view" element={<ViewPage />} />
            <Route path="/view/:id" element={<ViewItemPage />} />
            <Route path="/*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
      </WithBorder>
    </UserProvider>

  );
}

export default App;
