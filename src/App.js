import AddPage from "./pages/add/add.component";
import Header from "./components/common/header/header.component";
import ViewPage from "./components/view/view.component";
import ErorrPage from "./components/error/error.compopnent";
import { useState } from "react";

function App() {
  let pathname = window.location.pathname;
  console.log(pathname);
  let page =null;
  if(pathname === "/view"){
    page = <ViewPage />;
  }else if(pathname === "/add"){
    page = <AddPage />;
  }else{
    page = <ErorrPage />;
  }

  return (
    <div>
      <Header />
      {page}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
