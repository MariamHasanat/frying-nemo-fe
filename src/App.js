import AddPage from "./pages/add/add.component";
import Header from "./components/core/header/header.component";
import ViewPage from "./pages/view/view.component";
import NotFoundPage from "./pages/not-found/not-found.component";
import { useState } from "react";

function App() {
  const pathname = window.location.pathname.replace('/', '');
  console.debug(pathname)

  let page = <NotFoundPage/>

  if (pathname == 'add') page = <AddPage/>
  else if (pathname == 'view') page = <ViewPage/>

  return (
    <div style={{ width: `100%` }}>
      <Header/>
      {page}
    </div>
  );
}

export default App;