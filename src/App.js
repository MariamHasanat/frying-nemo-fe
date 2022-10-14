import Header from "./components/common/header/header.component";
import AddPage from "./pages/add/add.component";
import ViewPage from "./pages/view/view.component";
import { useState } from "react";
import './common.css' ;
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
      <Header 
        img = "./nemo.svg.svg" 
        title = "Frying Nemo"
        onNavigate = {changePage}  
      />
      {currentPage === 'add' && 
      <AddPage onNavigate = {changePage}
      onAdd = {addItem}  />}
      {currentPage === 'view' && <ViewPage value = {items}/>}

    </div>
  );
}

export default App;
