import { useState } from "react";
import NotFoundPage from "./components/not-found/not-found/not-found";
import AddPage from "./components/pages/add/add.component";
import ViewPage from "./components/view/view.component";
import Header from "./components/header/header";

function App() {
  const pathname = window.location.pathname;

  let page = null;

  if (pathname === '/view') {
    page = <ViewPage />;
  }
  else if (pathname === '/add') {
    page = <AddPage />;
  }
  else {
    page = <NotFoundPage />;
  }

  return (
    <div>
      <Header/>
      {page}

    </div>
  );
}
export default App;
