import { useState } from "react";
import AddPage from "./pages/add/add.component";
import Header from "./components/header/header.component";
import ViewPage from "./pages/view/view.component";
import NotFoundPage from "./pages/not-found/not-found.component";


function App() {

  const pathName = window.location.pathname;

  console.debug(`pathName`, pathName);

  let page = null;

  if (pathName === '/view') {
    page = <ViewPage />;
  } else if (pathName === '/add') {
    page = <AddPage />;
  } else {
    page = <NotFoundPage />;
  }

  return (

    <div>


      <Header />
      {page}


    </div>
  );
}

export default App;
