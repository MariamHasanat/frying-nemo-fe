import AddPage from "./pages/add/add.component";
import './common.css';
import Addveiw from "./pages/veiw/veiw.component";
import { useState } from "react";
import Header from "./components/core/header/header.component";
import NotFound from "./pages/not-found/not-found.component";

function App() {
  const[currentPage ,setCurrentPage] = useState('add');
  const changePage = (newPage) =>{
    setCurrentPage(newPage);
  }
  return (
    <div>
      <Header onNavigate={changePage} />
      {currentPage === 'add' && <AddPage onNavigate={changePage}/>}
      {currentPage === 'view' && <Addveiw/>}
      {currentPage === '404' && <NotFound/> }

    </div>
  );
}

export default App;
