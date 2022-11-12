import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import UserProvider from './components/add/form/provider/UserProvider';
import ViewItemPage from './pages/view/ViewItem/ViewItemPage';
import Notfound from "./pages/not-found/Notfound";
import AddPage from "./pages/add/add.component";
import LoginPage from './pages/login/LoginPage';
import ViewPage from "./pages/view/ViewPage";
import Header from "./logo/Header";
import React from 'react';
import './common.css';
import Guard from './pages/Guard/Guard';

function App() {
  return (
    <UserProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to='/view' replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/add" element={
            <Guard  permittedRole={['ADMIN']}>
              <AddPage />
            </Guard>
            } />
            <Route path="/view" element={<ViewPage />} />
            <Route path="/view/:id" element={<ViewItemPage />} />
            <Route path="/*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
    </UserProvider>

  );
}

export default App;
