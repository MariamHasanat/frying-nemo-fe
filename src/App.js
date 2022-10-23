import { useState } from "react";
import Form from "./components/add/form/form.component";
import Handel from "./components/header/header";
import AddPage from "./pages/add/add/add.component";

import NotFound from "./pages/add/not-found/not-found";
import View from "./pages/add/view/view";

function App() {
  const path = window.location.pathname;
  console.log(path);
  let page = null;
  if (path === '/add')
    page = <AddPage />
  else if (path === '/view')
    page = <View />
  else page = <NotFound />


  return (
    <div>
      <Handel />
      {page}
    </div>
  );
}

export default App;
