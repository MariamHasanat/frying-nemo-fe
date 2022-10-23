import { useState } from "react";
import Header from "./components/core/header/header.componet";
import AddPage from "./pages/add/add.component";
import ViewPage from "./pages/view/view.component";
import NotFoundPage from "./pages/not-found/not-found.component";

function App() {
  const pathname = window.location.pathname;

  let page = null;

  if (pathname === '/view') {
    page = <ViewPage />;
  } else if (pathname === '/add') {
    page = <AddPage />;
  } else {
    page = <NotFoundPage />;
  }

  return (
    <div>
      <Header  />
      {page}
    </div>
  );
}

export default App;
