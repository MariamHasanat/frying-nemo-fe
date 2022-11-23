import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import UserProvider from '../src/components/add/form/provider/UserProvider';
import CartProvider from '../src/components/add/form/provider/CartProvider';
import ListCartpage from './pages/cart/cart-page/ListCartpage';
import ViewItemPage from './pages/view/ViewItem/ViewItemPage';
import Notfound from "./pages/not-found/Notfound";
import AddPage from "./pages/add/add.component";
import LoginPage from './pages/login/LoginPage';
import ViewPage from "./pages/view/ViewPage";
import Guard from './pages/Guard/Guard';
import Header from "./logo/Header";
import './common.css';

function App() {


  return (
    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to='/view' replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/add" element={
            <Guard  permittedRole={['ADMIN']}> <AddPage /> </Guard>} />
            <Route path="/view" element={<ViewPage/>} />
            <Route path="/cart" element={<ListCartpage/>} />
            <Route path="/view/:id" element={<ViewItemPage />} />
            <Route path="/*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
        </CartProvider>
    </UserProvider>

  );
}

export default App;
