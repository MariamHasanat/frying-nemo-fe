import AddPage from "./pages/add/add.component";
import { useState } from "react";
import Header from "./logo/Header";
import ViewPage from "./pages/view/ViewPage";
import Notfound from "./pages/not-found/Notfound";
import './common.css';

function App() {
  // const [CurretnPage, setCurrentPage] = useState('add');
  const path = window.location.pathname;

  let page = null;

  if(path === '/add') {
    page = <AddPage/>
  }else if(path === '/view') {
    page = <ViewPage />
  }else
  page = <Notfound/>


  return (
    <div>
      <Header
      />
      {page}
{/* 
      {CurretnPage === 'add' && <AddPage
        onNavigate={(changePage) => setCurrentPage(changePage)} />}
      {CurretnPage === 'view' && <ViewPage />}
      {CurretnPage === '404' && <Notfound />}
      {currentPage === '404' && <NotFoundPage />} */}
    </div>
  );
}

export default App;
