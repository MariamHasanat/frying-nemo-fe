import AddPage from "./pages/add/add.component";
import NotFoundPage from "./pages/not-found/notfound-component";
import ViewPage from "./pages/view/view.component";
import Header from "./components/core/header/header.component";
import ViewItemPage from "./pages/view-item/view-item.component";
import LoginPage from "./pages/login/login.component";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WithBorders from "./components/common/with-borders/with-borders.component";
import UserProvider from "./components/providers/user-provider";
import Guard from "./components/core/guard/guard.component";
import CartPage from "./pages/cart/cart-page";
import CartProvider from "./components/providers/cart-provider.component";


function App() {
  return (
    <div>
      <UserProvider>
        <CartProvider>
          <BrowserRouter>
            <WithBorders>
              <Header />
              <Routes>
                <Route path="/" element={<Navigate to="/view" replace />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/add" element={<Guard permittedRoles={['ADMIN']} ><AddPage /></Guard>} />
                <Route path="/view" element={<ViewPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/view-details/:id" element={<ViewItemPage />} />
                <Route path="/*" element={<NotFoundPage />} />
              </Routes>
            </WithBorders>
          </BrowserRouter>
          </CartProvider>
      </UserProvider>
    </div >
  );
}


export default App;
