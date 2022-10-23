import AddPage from "./pages/add/add.component";
import './common.css';
import Addveiw from "./pages/veiw/veiw.component";
import { useState } from "react";
import Header from "./components/core/header/header.component";
import NotFound from "./pages/not-found/not-found.component";

function App() {
  const pathname = window.location.pathname;
  console.debug("the path name", pathname);
  let page = null;
  pathname === "/view" ? page = <Addveiw/> : pathname === "/add" ? page = <AddPage/> : page = <NotFound/>;

  return (
    <div>
      <Header  />
    {page}

    </div>
  );
}

export default App;
 