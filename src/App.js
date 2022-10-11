import { useState } from "react";
import NotFoundPage from "./not-found/not-found/not-found";
import AddPage from "./pages/add/add.component";
import ViewPage from "./components/view/view.component";
import Header from "./components/header/header";

function App() {
  const [currentPage, setCurrentPage] = useState('add');

  const changePage = (newPage) =>{
    setCurrentPage(newPage)
  };

  return (
    <div>
      <Header onNavigate={changePage} currentPage={currentPage}/>

      {currentPage === 'add' && <AddPage onNavigate={changePage}/> }
      {currentPage === 'view' && <ViewPage onNavigate={changePage}/> }
      {currentPage === '404' && <NotFoundPage onNavigate={changePage}/> }
    </div>
  );
}

export default App;
