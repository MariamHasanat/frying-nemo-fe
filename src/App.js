
import Header from "./components/core/header/header.component";
import AddPage from "./pages/add/add.component";
import NotFound from "./pages/page not found/page-not-found.component";
import ViewPage from "./pages/view/view.component";
function App() {

 
const pathname = window.location.pathname;
let page = null;
if(pathname ==="/add")
{
page=<AddPage/>;
}
else if (pathname==="/view")
{
page=<ViewPage/>;
}
else 
{
page=<NotFound/>;
}


  
  return (
    
<div>


<Header></Header>


{page}

    </div>
  );
}

export default App;
