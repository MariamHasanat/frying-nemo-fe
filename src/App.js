import { useState } from "react";
import Header from "./components/core/header/header.componet";
import AddPage from "./pages/add/add.component";
import ViewPage from "./pages/view/view.component";
import NotFoundPage from "./pages/not-found/not-found.component";

function App() {
  const [currentPage, setCurrentPage] = useState('404');

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
