import Header from "./components/common/header/header.component";
import AddPage from "./pages/add/add.component";
import ViewPage from "./pages/view/view.component";
import React , { useState } from "react";
import './common.css' ;
import NotFound from "./pages/not-found/notFound.component";
import { BrowserRouter, Navigate, Route, RouterProvider, Routes } from "react-router-dom";
import SingleItem from "./pages/view/cards/single-item/single-item.component";
import LoginPage from "./pages/login/login.component";

export const UserContext = React.createContext(null) ; // provider 
function App() {
  const initialUser =  JSON.parse(sessionStorage.getItem ('user')) ;
  const [user , setUser] = useState (initialUser) ;
  const [items , setItems] = useState([]) ;
  
  const setUserOverride = user => {
    setUser (user) ;
    sessionStorage.setItem ('user' , JSON.stringify (user)) ;
  }
  const addItem = (item) => {
    const tempItems = items ;
    tempItems.push (item) ;
    setItems (tempItems) ;
  }
  return (
    <div>
      <BrowserRouter >
      <UserContext.Provider value = {{user , setUser : setUserOverride}}>
        <Header 
          img = "./nemo.svg.svg" 
          title = "Frying Nemo" 
          user = {user}
          setUser = {setUserOverride}
        />
        <Routes>
          <Route path="/" element = {<Navigate to =  '/view' replace />} />   {/* page redirection using navigate component , which is built in react router dom library */}
          <Route path="/add" element = {<AddPage onAdd = {addItem} />} />
          <Route path="/login" element = {<LoginPage user = {user} setUser = {setUserOverride}/>}/>
          <Route path="/view" element = {<ViewPage user = {user}/>} />
          <Route path="/view-details/:id" element = {<SingleItem />} />
          <Route path="/*" element = {<NotFound  />} />
        </Routes> 
      </UserContext.Provider>
      </BrowserRouter>
      {/* {page} */}
      {/* {currentPage === 'add' && 
      <AddPage onNavigate = {changePage}
      onAdd = {addItem}  />}
      {currentPage === 'view' && <ViewPage value = {items}/>}
      <NotFound/> */}
    </div>
  );
}

export default App;
