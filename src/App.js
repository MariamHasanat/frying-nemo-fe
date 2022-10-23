// import { useState } from "react";

import Head from "./components/pop/header";
import AddPage from "./pages/add/add.component";
import NotFound from "./pages/not-found/notfound";
import ViewPage from "./pages/view/view";
function App() {



  // const [currentPage, setCurrentPage] = useState('add');
  // const changePage = (newPage) => {
  //   setCurrentPage(newPage);
  // };

  const pathName = window.location.pathname;

  let Page = null;

  if (pathName === "/add")
    Page = <AddPage />;
  else
    if (pathName === "/view")
      Page = <ViewPage />;
    else {
      Page = <NotFound />;
    }
  return (

    <div>
      <Head />

      {/* {currentPage === 'add' && <AddPage onNavigate={changePage} />}
      {currentPage === 'view' && <ViewPage />}
      {currentPage === '404' && <NotFound />}
       */}

      {Page}

    </div>
  );
}

export default App;
