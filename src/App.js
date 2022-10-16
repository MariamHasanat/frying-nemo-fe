import { useState } from "react";

import Head from "./components/pop/header";
import AddPage from "./pages/add/add.component";
import NotFound from "./pages/not-found/notfound";
import ViewPage from "./pages/view/view";
function App() {

  const [currentPage, setCurrentPage] = useState('add');
  const changePage = (newPage) => {
    setCurrentPage(newPage);
  };


  return (
    <div>


      <Head onNavigate={changePage} currentPage={currentPage}/>
      {currentPage === 'add' && <AddPage onNavigate={changePage} />}
      {currentPage === 'view' && <ViewPage />}
      {currentPage === '404' && <NotFound />}
      {/* <AddPage /> */}

    
    </div>
  );
}

export default App;
