import Header from "./components/core/header/header.componet";
import AddPage from "./pages/add/add.component";
import ViewPage from "./pages/view/view.component";
import ViewItemPage from "./pages/view-item/view-item.component";
import NotFoundPage from "./pages/not-found/not-found.component";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./pages/login/login.component";
import UserProvider from "./components/provider/user-provider.component";
import Guard from "./components/core/Guard/guard.component";
import CartProvider from "./components/provider/cart-provider.component";
import CartPage from "./pages/cart/cart.component";

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/add" element={<Guard permittedRoles={['ADMIN']}><AddPage /></Guard>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Navigate to="/view" replace />} />
            <Route path="/view" element={<ViewPage />} />
            <Route path="/cart" element={< CartPage/>} />
            <Route path="/view-details/:id" element={<ViewItemPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
