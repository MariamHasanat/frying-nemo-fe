import React,{useReducer} from "react";
import AddPage from "./pages/add/add.component";
import Header from "./components/common/header/header.component";
import ViewPage from "./components/view/view.component";
import ErorrPage from "./components/error/error.compopnent";
import LoginPage from "./pages/login/login.component";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import ViewItemPage from "./pages/view-item/view-item.component";
import UserProvider from "./components/providers/user-provider.component";
import Guard from "./components/core/guard/guard.component";
import {reducer,initialState} from "./reducers/cart"

export const UserContext = React.createContext(null);
function App() {

  const [cart, dispatch] = useReducer(reducer, initialState);


  return (
    <UserProvider>
      <div className="app-body">
        <BrowserRouter>
          <Header cart={cart}/>
          <Routes>
            <Route path="/" element={<Navigate to="/view" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/add" element={<Guard permittedRoles={['ADMIN']}><AddPage /></Guard>} />
            <Route path="/view" element={<ViewPage dispatch={dispatch} cart={cart} />} />
            <Route path="/view-details/:id" element={<ViewItemPage />} />
            <Route path="/*" element={<ErorrPage />} />
          </Routes>
        </BrowserRouter>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </UserProvider>
  );

}

export default App;
