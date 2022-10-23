import Header from "./components/common/header/header.component";
import AddPage from "./pages/add/add.component";
import ViewPage from "./pages/view/view.component";
import { useState } from "react";
import './common.css' ;
import NotFound from "./pages/not-found/notFound.component";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [currentPage , setCurrentPage] = useState ('add') ;
  const changePage = (newPage) => {
    setCurrentPage (newPage) ;
  }
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
        />
        <Routes>
          <Route path="/add" element = {<AddPage onAdd = {addItem} />} />
          <Route path="/view" element = {<ViewPage />} />
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
