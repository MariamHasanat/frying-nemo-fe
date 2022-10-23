import AddPage from "./pages/add/add.component";
import ViewPage from "./components/ViewPage/ViewPage";
import NotFoundPage from "./components/notfound/NotFound ";
import { useState } from "react";
import Header from "./components/core/header/header.componet";
function App() {

  const pathename = window.location.pathname;
  console.log("the path is :", pathename);

  let page = null;

  if (pathename === "/view") {
    page = <ViewPage />;
  }  else if (pathename === "/add") {
    page = <AddPage />;
  } else page = <NotFoundPage />;

  return (
    <div>
      <Header />
      <div className="flex"> <div>{page} </div></div>
    </div>
  );
}

export default App;
