import Header from "./components/common/header/header.component";
import AddPage from "./pages/add/add.component";
import './common.css' ;
import ViewPage from "./pages/view/view.component";
import { useState } from "react";
function App() {
  const [currentPage , setCurrentPage] = useState ('add') ;
  const changePage = (newPage) => {
    setCurrentPage (newPage) ;
  }
  return (
    <div>
      <Header 
        img = "./nemo.svg.svg" 
        title = "Frying Nemo"
        onNavigate = {changePage}  
      />
      {currentPage === 'add' && <AddPage onNavigate = {changePage} />}
      {currentPage === 'view' && <ViewPage />}
    </div>
  );
}

export default App;
