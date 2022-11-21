import { BrowserRouter, Route, Routes, Navigate, Form } from 'react-router-dom';
import UserProvider from './components/add/form/provider/UserProvider';
import ViewItemPage from './pages/view/ViewItem/ViewItemPage';
import Notfound from "./pages/not-found/Notfound";
import AddPage from "./pages/add/add.component";
import LoginPage from './pages/login/LoginPage';
import ViewPage from "./pages/view/ViewPage";
import Header from "./logo/Header";
import React, { useReducer } from 'react';
import './common.css';
import Guard from './pages/Guard/Guard';
import {reducer , intialState} from '../src/reducer/reducer'
import ListCartpage from './pages/cart/ListCartpage';

function App() {

  const [cart , dispatch] = useReducer(reducer , intialState);

  return (
    <UserProvider>
        <BrowserRouter>
          <Header cart={cart} />
          <Routes>
            <Route path="/" element={<Navigate to='/view' replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/add" element={
            <Guard  permittedRole={['ADMIN']}> <AddPage /> </Guard>} />
            <Route path="/view" element={<ViewPage dispatch={dispatch} cart={cart}/>} />
            <Route path="/cart" element={<ListCartpage dispatch={dispatch} cart={cart}/>} />
            <Route path="/view/:id" element={<ViewItemPage dispatch={dispatch} cart={cart}/>} />
            <Route path="/*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
    </UserProvider>

  );
}

export default App;
