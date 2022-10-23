import AddPage from "./pages/add/add.component";
import ViewPage from "./common/view/view.component";
import Header from './common/header/header.component';
import NotFoundPage from "./pages/add/not-found";

function App() {
  // const [currentPage,setCurrentPage]=useState('add');
  // const changePage=(nwePage)=>{
  //     setCurrentPage(nwePage);
  // }
  const pathname = window.location.pathname;
  let page = '';
  if (pathname === '/add') {
    page = <AddPage />;
  } else if (pathname === '/view') {
    page = <ViewPage />;
  }else{
    page=<NotFoundPage/>
  }
  return (
    <div>

      <Header />
      {page}


      {/* {currentPage === 'add' && <AddPage onNavigate={changePage} />}
      {currentPage === 'view' && <ViewPage onNavigate={changePage} />}
      {currentPage === 'view' && <NotFoundPage  />} */}
    </div>
  );
}

export default App;
