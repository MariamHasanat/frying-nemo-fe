import { useState } from "react";
import Header from "./components/core/header/header.componet";
import AddPage from "./pages/add/add.component";
import NotFound from "./pages/page not found/page-not-found.component";
import ViewPage from "./pages/view/view.component";
function App() {

  const [currentPage, setCurrentPage] = useState("add");
  const changePage = (newPage) => {
    setCurrentPage(newPage);
  };


  
  return (
    <div>
      <Header onNavigate={changePage} currentPage={currentPage} />
      {currentPage === 'add' && <AddPage onNavigate={changePage} />}
      {currentPage === 'view' && <ViewPage/>}
      {currentPage === 'page-not-found' && <NotFound/>}






    </div>
  );
}

export default App;
