import { useState } from "react";
import Header from "./components/core/header/header.componet";
import AddPage from "./pages/add/add.component";
import ViewPage from "./pages/view/ViewPage.component";

function App() {
  const [pageName, setPageName] = useState('add');
  return (
    <div>
      <Header setPageName={setPageName} />
      {pageName === 'add' && <AddPage />}
      {pageName === 'view' && <ViewPage />}



    </div>
  );
}

export default App;
