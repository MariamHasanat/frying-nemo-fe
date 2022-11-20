/* never forget your friend (alt+shift+f) */

// Here we import the components
import React, { useReducer } from "react";
import AddPage from "./pages/menuPageContainer/page.container";
import Header from "./components/header/header.component";
import ViewPage from "./pages/view/view.container";
import NotFound from "./pages/not-found/not-found.component";
import ViewItemPage from "./pages/view-item/view.item";
import LoginPage from "./pages/login/login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserProvider from "./components/user-provider/user-provider";
import Guard from "./components/core/guard/guard";
import {initialState, reducer} from './reducer/cart' ;

//A function App will render the components
function App() {

  const [cart, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="pages-container">
      <div className="consistancy-between-pages">
        <UserProvider>
          <BrowserRouter>
            <Header cart={cart}/>
            <Routes>
              <Route path="/" element={<Navigate to="/view" replace />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/add" element={<Guard permittedRoles={["ADMIN"]}><AddPage /></Guard>} />
              <Route path="/view" element={<ViewPage dispatch={dispatch} cart={cart}/>}  />
              <Route path="/view/:id" element={<ViewItemPage dispatch={dispatch} cart={cart}/>} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </div>
    </div>
  );
}

export default App;

