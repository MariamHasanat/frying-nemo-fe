import AddPage from "./pages/add/add.component";
import ViewPage from "./common/view/view.component";
import Header from'./common/header/header.component';
import { useState } from "react";

function App() {
  const [currentPage,setCurrentPage]=useState('add');
  const changePage=(nwePage)=>{
      setCurrentPage(nwePage);
  }
  return (
    <div>

      <Header onNavigate ={changePage} currentPage={currentPage} />
      {currentPage === 'add' && <AddPage onNavigate={changePage} />}
      {currentPage === 'view' && <ViewPage onNavigate={changePage} />}
    </div>
  );
}

export default App;
