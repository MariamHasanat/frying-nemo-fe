import Header from "./components/common/header/header.component";
import AddPage from "./pages/add/add.component";
import ViewPage from "./pages/view/view.component";
import { useState } from "react";
import './common.css' ;
import NotFound from "./pages/not-found/notFound.component";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SingleItem from "./pages/view/cards/single-item/single-item.component";
import LoginPage from "./pages/login/login.component";
function App() {
 
  const [user , setUser] = useState (null) ;
  const [items , setItems] = useState ([]) ;
  const addItem = (item) => {
    const tempItems = items ;
    tempItems.push (item) ;
    setItems (tempItems) ;
  }

  return (
    <div>
      <BrowserRouter>
        <Header 
          img = "./nemo.svg.svg" 
          title = "Frying Nemo" 
          user = {user}
        />
        <Routes>
          <Route path="/" element = {<Navigate to =  '/view' replace />} />   {/* page redirection using navigate component , which is built in react router dom library */}
          <Route path="/add" element = {<AddPage onAdd = {addItem} user = {user} />} />
          <Route path="/login" element = {<LoginPage setUser = {setUser}/>}/>
          <Route path="/view" element = {<ViewPage user = {user}/>} />
          <Route path="/view-details/:id" element = {<SingleItem />} />
          <Route path="/*" element = {<NotFound  />} />
        </Routes> 
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
