import AddPage from "./pages/add/add.component";
import Header from "./components/core/header/header.component";
import ViewPage from "./pages/view/view.component";
import NotFoundPage from "./pages/not-found/not-found.component";
import { useState } from "react";

function App() {
  const [pageId, setPageId] = useState(0);
  
  const changeNav = (pageId) => {
    setPageId(pageId)
  }

  return (
    <div style={{width: `100%`}}>
      <Header pageId={pageId} changeNav={changeNav}/>
      {
        pageId == 0? <AddPage />
        : (pageId == 1? <ViewPage /> : <NotFoundPage/>)
      }
    </div>
  );
}

export default App;