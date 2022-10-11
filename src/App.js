import AddPage from "./pages/add/add.component";
import Header from "./components/common/header/header.component";
import ViewPage from "./components/view/view.component";
import { useState } from "react";

function App() {
  const [pageName, setpageName]= useState("add");
  const changePageName = (newPageName) =>{
    setpageName(newPageName);
  };
  return (
    <div>
      <Header onNavigate={changePageName} pageName={pageName} />
      {pageName =="add" && (<AddPage onNavigate={changePageName} />)}
      {pageName =="view" && (<ViewPage />)}
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
