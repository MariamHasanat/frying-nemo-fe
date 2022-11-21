import AddPage from "./pages/add/add.component";
import ViewPage from "./common/view/view.component";
import Header from './common/header/header.component';
import React,{useReducer} from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NotFoundPage from "./pages/add/not_found/not-found";
import ViewItemPage from "./common/view/view-item/item.component";
import LoginPage from "./pages/add/log-in/login.component";
import UserProvider from "./components/provider/provider.component";
import Guard from './components/guard/guard.component';
import {reducer , initial} from './reducer/cart';
import CartPage from "./components/cart/cart-page";
 function App() {



    const [cart, dispatch] = useReducer(reducer, initial);

  return (
    <div>
     <UserProvider>
        <BrowserRouter>
          <Header cart={cart} />
          <Routes>
            <Route path="/" element={<Navigate to="/view" replace />} />
              <Route path="/add/*" element={<Guard permittedRoles={['ADMIN']} ><AddPage /> </Guard>} />
            <Route path="/view" element={<ViewPage dispatch={dispatch} cart={cart}/>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/view/:id" element={<ViewItemPage dispatch={dispatch} cart={cart}/>} />
            <Route path="/cart" element={<CartPage dispatch={dispatch} cart={cart} />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
        </UserProvider>
    </div>
  );
}

export default App;

