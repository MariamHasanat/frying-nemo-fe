/* never forget your friend (alt+shift+f) */

// Here we import the components
import { useState } from "react";
import AddPage from "./pages/menuPageContainer/page.container";
import Header from "./components/header/header.component";
import ViewPage from "./pages/view/view.container";
import NotFound from "./pages/not-found/not-found.component";

//A function App will render the components
function App() {

  // const [currentPage, setCurrentPage] = useState('add');

  // const changePage = (newPage) => {
  //   setCurrentPage(newPage);
  // };
  const pathname = window.location.pathname;

  let page = null;

  if (pathname === "/view") {
    page = <ViewPage />;
  } else if (pathname === "/add") {
    page = <AddPage />;
  } else {
    page = <NotFound />;
  }


  return (
    <div className="pages-container">
      <div className="consistancy-between-pages">
        <Header />
        {page}
      </div>
    </div>
  );
}

export default App;
