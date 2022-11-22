import React, { useReducer } from "react";
import AddPage from "./pages/add/add.component";
import Header from "./components/header/header.component";
import ViewPage from "./pages/view/view.component";
import ViewItemPage from "./pages/view-item/view-item.component";
import NotFoundPage from "./pages/not-found/not-found.component";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./pages/login/login.component";
import UserProvider from './components/providers/user-provider.component';
import Guard from './components/common/guard/guard.component';
import { reducer, initialState } from './reducers/cart';


function App() {

  const [cart, dispatch] = useReducer(reducer, initialState);

  return (

    <UserProvider>
      <BrowserRouter>
        <Header cart={cart} />
        <Routes>
          <Route path="/" element={<Navigate to="/view" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/add" element={<Guard permittedRoles={['ADMIN']}><AddPage /></Guard>} />
          <Route path="/view" element={<ViewPage dispatch={dispatch} cart={cart} />} />
          <Route path="/view-details/:id" element={<ViewItemPage dispatch={dispatch} cart={cart} />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>

  );
}

export default App;
