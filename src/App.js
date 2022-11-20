import AddPage from "./pages/add/add/add.component";
import ViewPage from "./pages/add/view/view.component";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import ViewItemPage from "./pages/add/view/view-item/view-item.component";
import LoginPage from "./pages/add/login/login.component";
import Header from "./components/core/header/header.component";
import NotFound from "./pages/add/not-found/not-found.component";
import UserProvider from "./components/provider/user-provider.component";
import { useReducer } from "react";

function reducer(cart, action){
switch (action.type){
  case 'ADD_CART_ITEM': 
  return [...cart, {meal: action.meal, quantity: 1}];
  case 'INCREMENT_CART_QUANTITY':{
    let found = false;
    const newCart = cart.map(cartItem =>{
      if (cartItem.meal.id ===action.meal.id){
        found = true;
        return {...cartItem, quantity: cartItem.quantity +1 };
      }else {
        return cartItem;
      }
    });

    if(!found){
      return [...cart, {meal: action.meal, quantity: 1}]
    }
    return newCart
  }
  case 'DECREMENT_CART_QUANTITY': {
    let shouldDelete = false;
    const newCart = cart.map(cartItem =>{
      if(cartItem.meal.id === action.meal.id){
        if(cartItem.quantity === 1){
          shouldDelete = true;
        }
        return{...cartItem,quantity: cartItem.quantity - 1};
      
      }
      else{
        return cartItem;
      }
    });

    if (shouldDelete){
      return cart.filter(cartItem => cartItem.meal.id !== action.meal.id);

    }
    return newCart
  }
  case 'DELETE_CART_ITEM':{
    return cart.filter(cartItem => cartItem.meal.id !== action.meal.id);
  }
  
}
return cart;
}


const initialState = [];

function App() {

  const [cart, dispatch] = useReducer(reducer, initialState);

  return (
    <UserProvider>
      <BrowserRouter>
        <Header cart={cart}/>
          <Routes >
            <Route path="/" element={<Navigate to="/view" replace/>}/>
            <Route path="/add" element={<AddPage />} />
            <Route path="/view" element={<ViewPage dispatch={dispatch} />}></Route>
            <Route path="/view-details/:id" element={<ViewItemPage />} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/*" element={<NotFound/>}/>
          </Routes>
          </BrowserRouter>
          </UserProvider>
    

  );
}
export default App;


