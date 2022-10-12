import Header from "./components/common/header/header.component";
import AddPage from "./pages/add/add.component";
import './common.css' ;
import { useState } from "react";
import ViewPage from "./pages/view/view.component";
function App() {
  const [currentPage , setCurrentPage] = useState ('add') ;
  const changePage = (newPage) => {
    setCurrentPage (newPage) ;
  } ;
  return (
    <div>
      <Header 
        img = "./nemo.svg.svg" 
        title = "Frying Nemo"
        onNavigate = {changePage} currentPage = {currentPage}
      />
      {currentPage === 'add' && <AddPage onNavigate = {changePage}/>}
      {currentPage === 'view' && <ViewPage/>}
      {/* <AddPage /> */}
    </div>
  );
}

export default App;
