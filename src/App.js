import Header from "./components/common/header/header.component";
import View from "./pages/view/view";
import '../src/pages/add/add.component';
import AddPage from "../src/pages/add/add.component";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ViewItem from "./pages/view-item/view-item.component";
import LoginComponent from "./pages/login/login.component";
import React, { useReducer } from "react";
import Test from "./pages/test/test.component";
import UserProvider from "./components/providers/user-provider";
import Guard from "./components/core/guard/guard.component";

const initialState = [];
function App() {

  /**
   * 
   * @param {Array<
   * {
   * id: number;
   * name: string;
   * description: string;
   * ingredients: string[];
   * price: number;
   * category: string;
   * image: string;
   * }>} cart 
   * @param {*} action 
   */
  const reducer = (cart, action) => {
    switch (action.key) {
      case "INCREMENT_CART_QUANTITY": {
        let found = false;
        const newCart = cart.map(item => {
          if (action.meal.id === item.id) {

          }
        });
      }
      case "DECREMENT_CART_QUANTITY": {

      }

      default:
        break;
    }

  };

  const [cart, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <BrowserRouter>
        <UserProvider>
          <Guard component='header'><Header cart={cart} /></Guard>
          <Routes>
            <Route path="/" element={<Navigate to='/view' replace />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/add" element={<Guard component='add' permittedRoles={['ADMIN']}><AddPage /></Guard>} />
            <Route path="/view" element={<View />} />
            <Route path="/view/:id" element={<ViewItem />} />
            <Route path="/404" element={<Test />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
