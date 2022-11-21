import React, { useReducer } from "react";
import Header from "./components/core/header/header.component";
import AddPage from "./pages/add/add.component";
import NotFound from "./pages/page not found/page-not-found.component";
import ViewPage from "./pages/view/view.component";
import ViewItemPage from "./pages/view-item/view-item.component";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./pages/login/login.component";
import UserProvider from "./components/user-provider/user-provider.component";
import { reducer, initialState } from "./reducers/cart";
export const UserContext = React.createContext(null);


function App() {

  const [cart, dispatch] = useReducer(reducer, initialState);

  return (



    <UserProvider>
      <div>
        <BrowserRouter>
          <Header cart={cart} />
          <Routes>
            <Route path="/" element={<Navigate to="/view" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/view" element={<ViewPage dispatch ={dispatch}  cart={cart}/>} />
            <Route path="/view/:id" element={<ViewItemPage dispatch={dispatch} cart={cart} />}/>
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;

