import Header from "./components/core/header/header.component";
import AddPage from "./pages/add/add.component";
import ViewPage from "./pages/view/view.component";
import './common.css';
import NotFound from "./pages/not-found/notFound.component";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SingleItem from "./pages/view/cards/single-item/single-item.component";
import LoginPage from "./pages/login/login.component";
import UserProvider from "./components/providers/user-provider.component";
import Guard from "./components/providers/guard-provider.component";
import { useReducer } from "react";
const initialState = [] ;

function App() {
  const reducer = (cart , action) => {
    switch (action.type) {
      case "INCREMENT": {
        let found = false ;
        const newCart = cart.map (item => {
          if (item.meal.id === action.meal.id) {
            found = true ;
            return {meal : item.meal , quantity : item.quantity + 1} ;
          }
          else {
            return item ;
          }
        }) ;
        if (!found) {
          return [...cart , {meal: action.meal , quantity: 1}] ;
        }
        else {
          return newCart ;
        }
      }
        case "DECREMENT" :{
          let shouldBeDeleted = false ;
          const newCart = cart.map (item => {
            if (item.meal.id === action.meal.id) {
              if (item.quantity === 1) {
                shouldBeDeleted = true ;
              }
              return {meal : item.meal , quantity : item.quantity - 1} ;
            }
            else {
              return item;
            }
          }) ;
          if (shouldBeDeleted) {
            return newCart.filter (item => item.meal.id !== action.meal.id) ;
          }
          else {
            return newCart ;
          }
        }
        default : break
    
    }

  }
  /**
   * @type {[]}
   */
  const [cart , dispatch] = useReducer (reducer , initialState) ;
  return (
    <div>
      <BrowserRouter >
        <UserProvider>
          <Header
            img="./nemo.svg.svg"
            title="Frying Nemo"
            cart = {cart}
          />
          <Routes>
            <Route path="/" element={<Navigate to='/view' replace />} />   {/* page redirection using navigate component , which is built in react router dom library */}
            <Route path="/add" element={<Guard permittedRoles= {['ADMIN']} ><AddPage /></Guard>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/view" element={<ViewPage dispatch = {dispatch} />} />
            <Route path="/view-details/:id" element={<SingleItem />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
