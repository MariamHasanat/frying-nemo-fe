import AddPage from "./pages/add/add.component";
import ViewPage from "./components/ViewPage/ViewPage";
import NotFoundPage from "./components/notfound/NotFound ";
import Header from "./components/core/header/header.componet";
import { BrowserRouter, Routes, Route ,Navigate} from 'react-router-dom'
import Guard from "./components/core/Guard/Guard-component";
import ViewItemPage from "./pages/view-item/view-item.component";
import LoginPage from "./pages/login/login.compent";
import React, { useReducer } from "react";
import Provider from "./common/Provider/Provider-commponet";
export const UserContext = React.createContext(null);
const initializationState=[]
function App() {
 const reduce=(cart,action)=>{

  switch (action.type) {
    case "ADD_CART_ITEM":
      return [...cart, { meal: action.meal, quantity: 1 }];
    case "INCREMENT_CART_QUANTITY": {
      let found = false;
      const newCart = cart.map(cartItem => {
        if (cartItem.meal.id === action.meal.id) {
          found = true;
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        } else {
          return cartItem;
        }
      });

      if (!found) {
        return [...cart, { meal: action.meal, quantity: 1 }];
      }
      return newCart;
    }
    case "DECREMENT_CART_QUANTITY": {
      let shouldDelete = false;
      const newCart = cart.map(cartItem => {
        if (cartItem.meal.id === action.meal.id) {
          if (cartItem.quantity === 1) {
            shouldDelete = true;
          }
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        } else {
          return cartItem;
        }
      });

      if (shouldDelete) {
        return cart.filter(cartItem => cartItem.meal.id !== action.meal.id);
      }

      return newCart;
    }
    case "DELETE_CART_ITEM": {
      return cart.filter(cartItem => cartItem.meal.id !== action.meal.id);
    }
  }

    return cart;
  };





  





 


const [cart, dispatch] = useReducer(reduce, initializationState)
console.log(reduce)
  return (
    <div>
    <Provider>
      <BrowserRouter>
        < Header   cart={cart}  />
        <div className="flex"> 
      
        <Routes>
            <Route path="/*" element={<NotFoundPage></NotFoundPage>}></Route>
            <Route path="/add" element={<Guard Allowed={["ADMIN"]}><AddPage ></AddPage></Guard> } ></Route>
            <Route path="/" element={<Navigate to="/view"></Navigate>} ></Route>
            <Route path="/view" element={<ViewPage dispatch={dispatch} ></ViewPage>}></Route>
            <Route path="/view/:id" element={<ViewItemPage></ViewItemPage>}></Route>
            <Route path="/login" element={<LoginPage  />} />
        </Routes>
     
        </div>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
