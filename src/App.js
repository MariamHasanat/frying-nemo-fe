import AddPage from "./pages/add/add.component";
import "./common.css";
import React, { useReducer } from "react";
import Addveiw from "./pages/veiw/veiw.component";
import Header from "./components/core/header/header.component";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddveiwItem from "./pages/veiwItem/veiw-item.component";
import LoginPage from "./pages/login/login.component";
import UseProvider from "./components/providers/user.provider.component";
const intitalState = [];
function App() {
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "ADD_TO_CART":
  //       return [...cart,action.meal];
  //       case "INCREMENT_CART_QUANTITY": 
  //       const newCart = cart.map(cartItem => {
  //             if(cartItem.item.id === action.meal.id){
  //               return {...cartItem , quantity: cartItem.quantity +1};
  //             }else{
  //               return cartItem;
  //             }
  //       });
  //       return newCart;
  //     }
  //       case "DECREMENT_CART_QUANTITY": 
  //       const newCart = cart.map(cartItem => {
  //             if(cartItem.item.id === action.meal.id){
  //               return {...cartItem , quantity: cartItem.quantity -1};
  //             }else{
  //               return cart;
  //             }
  //   }
  //   return cart;
  // };
  // const [cart, dispatch] = useReducer(reducer, intitalState);
  return (
    <UseProvider>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/view" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/view" element={<Addveiw />} />
            <Route path="/view-details/:id" element={<AddveiwItem />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UseProvider>
  );
}

export default App;
