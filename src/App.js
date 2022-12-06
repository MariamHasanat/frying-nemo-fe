import React ,{useReducer} from "react";
import AddPage from "./pages/menuPageContainer/page.container";
import Header from "./components/header/header.component";
import ViewPage from "./pages/view/view.page";
import NotFound from "./pages/not-found/not-found.component";
import ViewItemPage from "./pages/view-item/view.item";
import CartPage from "./pages/cart/cart.page";
import LoginPage from "./pages/login/login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserProvider from "./components/providers/user-provider";
import CartProvider from "./components/providers/cart-provider";
import Guard from "./components/core/guard/guard";

import { reducer, initialState } from "./reducer/cart";
 
function App() {
  
  const [cart, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div className="pages-container">
      <div className="consistancy-between-pages">
        <UserProvider>
          <CartProvider>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<Navigate to="/view" replace />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/add" element={<Guard permittedRoles={["ADMIN"]}><AddPage /></Guard>} />
                <Route path="/view" element={<ViewPage dispatch={dispatch} cart={cart} />} />
                <Route path="/view/:id" element={<ViewItemPage dispatch={dispatch} cart={cart} />} />
                <Route path="/cart" element={<CartPage  dispatch={dispatch} cart={cart}/>} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </CartProvider>
        </UserProvider>
      </div>
    </div>
  );
}

export default App;

