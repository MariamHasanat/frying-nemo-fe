import { useState } from "react";
import Header from "./components/common/header/header.component";
import View from "./pages/view/view";
import '../src/pages/add/add.component';
import AddPage from "../src/pages/add/add.component";
import Test from "./pages/test/test.component";
function App() {
  const [currentPage, setCurrentPage] = useState('test');

  const changePage = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <Header onNavigate={changePage} currentPage={currentPage} />

      {
        currentPage === 'test' && <Test />
      }
      {
        currentPage === 'add' && <AddPage />
      }



    </div>
  );
}

export default App;
