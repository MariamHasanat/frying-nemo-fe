import AddPage from "./pages/add/add.component";
import ViewPage from "./components/ViewPage/ViewPage";
import NotFoundPage from "./components/notfound/NotFound ";
import { useState } from "react";
import Header from "./components/core/header/header.componet";
function App() {

  const [currentPage, setCurrentPage] = useState('Add');

  const changePage = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
     <Header onNavigate={changePage}></Header>
      <div className="flex">
        <div className="mydiv">
        {currentPage === 'Add' && <AddPage onNavigate={changePage} />}
      {currentPage === 'View' && <ViewPage />}
      {currentPage === '404' && <NotFoundPage />}

        </div>
      </div>
    </div>
  );
}

export default App;
