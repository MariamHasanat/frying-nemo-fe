import { useState } from "react";
import Header from "./components/common/header/header.component";
import View from "./pages/view/view";
import '../src/pages/add/add.component';
import AddPage from "../src/pages/add/add.component";
import Test from "./pages/test/test.component";
function App() {

  const pathName = window.location.pathname;

  let page = null;
  if (pathName === '/view') {
    page = <View />;
  } else if (pathName === '/add') {
    page = <AddPage />;
  } else {
    page = <Test />;
  }

  return (
    <div>
      <Header />
      {page}


    </div>
  );
}

export default App;
