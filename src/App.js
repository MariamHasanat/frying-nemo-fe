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

const initial = [];

function App() {

  const reducer = (cart, action) => {

    switch (action.type) {

      case "Add-to-cart ":
        return [...cart, action.meal];
      case "Increment-cart-Quantity": {
        const newCart = cart.map(CartItem => {

          if (CartItem.meal.id === action.meal.id)
            return { ...CartItem, quantity: CartItem.quantity + 1 };
          else return CartItem;

        });

        return newCart;
      }

      case "Decrement-cart-Quantity": {
        const newCart = cart.map(CartItem => {

          if (CartItem.meal.id === action.meal.id)
            return { ...CartItem, quantity: CartItem.quantity - 1 };
          else return CartItem;

        });

        return newCart;
      }
      case "Delete-cart": {
        return cart.filter(CartItem => CartItem.meal.id !== action.meal.id);
      }


    }

    return cart;

  }; 
   const [cart, dispatch] = useReducer(reducer, initial);

  return (
    <div>
     <UserProvider>
        <BrowserRouter>
          <Header cart={cart} />
          <Routes>
            <Route path="/" element={<Navigate to="/view" replace />} />
              <Route path="/add/*" element={<Guard permittedRoles={['ADMIN']} ><AddPage /> </Guard>} />
            <Route path="/view" element={<ViewPage dispatch={dispatch}/>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/view/:id" element={<ViewItemPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
        </UserProvider>
    </div>
  );
}

export default App;

