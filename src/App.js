import { useState } from "react";
import Form from "./components/add/form/form.component";
import Handel from "./components/header/header";
import AddPage from "./pages/add/add/add.component";

import NotFound from "./pages/add/not-found/not-found";
import View from "./pages/add/view/view";

function App() {
  const [currentPage, setCurrentPage] = useState('add');

  const changePage = (newPage) => {
    setCurrentPage(newPage);
  };
  
  return (
    <div>
      <Handel onNavigate={changePage} currentPage={currentPage} />

      {currentPage === 'add' && <AddPage onNavigate={changePage} />}
      {currentPage === 'view' && <View />}
      {currentPage === 'not-found' && <NotFound />}
    </div>
  );
}

export default App;
