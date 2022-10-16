import { useState } from "react";
import Header from "./header/header.comonent";
import AddPage from "./pages/add/add.component";
import ViewPage from "./pages/add/view/view.component";
import NotFound from "./pages/add/not-found/not-found.component";

function App() {
  const [currentPage, setCurrentPage] = useState('add');

  const changePage = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <Header onNavigate={changePage} currentPage={currentPage} />

      {currentPage === 'add' && <AddPage onNavigate={changePage} />}
      {currentPage === 'view' && <ViewPage />}
      {currentPage === '404' && <NotFound />}

    </div>
  );
}

export default App;

