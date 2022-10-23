/* never forget your friend (alt+shift+f) */

// Here we import the components
import { useState } from "react";
import AddPage from "./pages/menuPageContainer/page.container";
import Header from "./components/header/header.component";
import ViewPage from "./pages/view/view.container";
import NotFound from "./pages/not-found/not-found.component";

//A function App will render the components
function App() {

  const [currentPage, setCurrentPage] = useState('404');

  const changePage = (newPage) => {
    setCurrentPage(newPage);
  };

  

  return (
    <div className="pages-container">
      <div className="consistancy-between-pages">
        <Header onNavigate={changePage} currentPage={currentPage} />

        {currentPage === 'add' && <AddPage onNavigate={changePage} />}
        {currentPage === 'view' && <ViewPage />}
        {currentPage === '404' && <NotFound />}

      </div>
    </div>
  );
}

export default App;
