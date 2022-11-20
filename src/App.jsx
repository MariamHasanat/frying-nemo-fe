import React, { useReducer } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from "./components/core/header/header.component";
import AddPage from "./pages/add/add.page";
import ViewPage from "./pages/view/view.page";
import ViewItemPage from "./pages/view-item/view-item.page";
import NotFoundPage from "./pages/not-found/not-found.page";
import CartPage from "./pages/cart/cart.page";
import LoginPage from "./pages/login/login.page";
import UserProvider from "./components/providers/user-provider.component";
import Guard from "./components/core/guard/guard.component";

import { reducer, initialState } from "./reducers/cart";

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
          <Route path="/cart" element={<CartPage dispatch={dispatch} cart={cart} />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
