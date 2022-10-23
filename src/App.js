

import Header from "./components/core/header/header.component";
import AddPage from "./pages/add/add.component";
import ViewPage from "./pages/add/view/view.component";
import NotFound from "./pages/add/not-found/not-found.component";


function App() {


  const pathname = window.location.pathname;

  let page = null;
  if(pathname==='/view'){
    page = <ViewPage />
  }else if (pathname=='/add'){
    page = <AddPage  />
  }else {
    page=<NotFound />
  }
 
  return (
    <div>
      <Header />
      {page}
    </div>
  );
}
export default App;


