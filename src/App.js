import AddPage from "./pages/add/add.component";
import { useState } from "react";
import Header from "./logo/Header";
import ViewPage from "./pages/view/ViewPage";
import Notfound from "./pages/not-found/Notfound";
import './common.css';

function App() {
  const [CurretnPage, setCurrentPage] = useState('404');
  return (
    <div>
      <Header curretnPage={CurretnPage}
        onNavigate={(changePage) => setCurrentPage(changePage)} />

      {CurretnPage === 'add' && <AddPage
        onNavigate={(changePage) => setCurrentPage(changePage)} />}
      {CurretnPage === 'view' && <ViewPage />}
      {CurretnPage === '404' && <Notfound />}
      {/* {currentPage === '404' && <NotFoundPage />} */}
    </div>
  );
}

export default App;
