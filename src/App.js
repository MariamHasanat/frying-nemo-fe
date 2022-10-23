import Header from "./components/common/header/header.component";
import AddPage from "./pages/add/add.component";
import ViewPage from "./pages/view/view.component";
import { useState } from "react";
import './common.css' ;
import NotFound from "./pages/not-found/notFound.component";
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

  const pathname = window.location.pathname ;
  console.log (pathname)
  let page = null ; 
  if (pathname === '/view') {
    page = <ViewPage />
  }
  else if (pathname === '/add') {
    page = <AddPage  />
  }
  else {  //called catch all block
    page = <NotFound/> 
  }

  return (
    <div>
      <Header 
        img = "./nemo.svg.svg" 
        title = "Frying Nemo"
        onNavigate = {changePage}  
      />
      {page}
      {/* {currentPage === 'add' && 
      <AddPage onNavigate = {changePage}
      onAdd = {addItem}  />}
      {currentPage === 'view' && <ViewPage value = {items}/>}
      <NotFound/> */}

    </div>
  );
}

export default App;
