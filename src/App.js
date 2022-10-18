import { useState } from "react";
import AddPage from "./pages/add/add.component";
import NotFoundPage from "./pages/not-found/notfound-component";
import ViewPage from "./pages/view/view.component";
import Header from "./components/core/header/header.component";

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
      {currentPage === '404' && <NotFoundPage />}
    </div>
  );
}

export default App;
