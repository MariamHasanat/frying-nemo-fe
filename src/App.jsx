import AddPage from "./pages/add/add.component";
import ViewPage from "./components/ViewPage/ViewPage";
import NotFoundPage from "./components/notfound/NotFound ";
import Header from "./components/core/header/header.componet";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Guard from "./components/core/Guard/Guard-component";
import ViewItemPage from "./pages/view-item/view-item.component";
import LoginPage from "./pages/login/login.compent";
import React from "react";
import UserProvider from "./common/Provider/Provider-commponet";
import CartProvider from "./common/Provider/cart-provider-component";
import CartPage from "./pages/cart/cart.page";
import Sighin from "./pages/login/Sighin";
import UpdateForm from "./pages/update/add/update.component";
export const UserContext = React.createContext(null);


function App() {


  return (
    <div>
      <UserProvider>
        <CartProvider>
          <BrowserRouter>
            < Header  />
            <div className="flex">

              <Routes>
                <Route path="/404" element={<NotFoundPage></NotFoundPage>}></Route>
                <Route path="/add" element={<Guard Allowed={["ADMIN"]}><AddPage ></AddPage></Guard>} ></Route>
                <Route path="/update/:id" element={<Guard Allowed={["ADMIN"]}><UpdateForm></UpdateForm></Guard>} ></Route>
                <Route path="/" element={<Navigate to="/view"></Navigate>} ></Route>
                <Route path="/view" element={<ViewPage  ></ViewPage>}></Route>
                <Route path="/view/:id" element={<ViewItemPage  ></ViewItemPage>}></Route>
                <Route path="/cart" element={<CartPage  />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/Sign-up" element={<Sighin></Sighin> } />
              </Routes>

            </div>
          </BrowserRouter>
        </CartProvider>
      </UserProvider>
    </div>
  );
}

export default App;
