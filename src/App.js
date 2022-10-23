 import Header from "./components/core/header/header.componet";
import AddPage from "./pages/add/add.component";
import ViewPage from "./pages/view/view.component";
import NotFoundPage from "./pages/not-found/not-found.component";

function App() {
  // const [currentPage, setCurrentPage] = useState('add');

  const pathname = window.location.pathname;
  console.debug('pathname', pathname);
  let page = null;

  // const changePage = (newPage) => {
  //   setCurrentPage(newPage);
  // };
  if (pathname === '/view') {
    page = <ViewPage />; 
  }
  else if (pathname === '/add') {
    page = <AddPage />;
  }

  else {
    page = <NotFoundPage />;
  }

  return (
    <div>
      <Header/>

      {/* {currentPage === 'add' && <AddPage onNavigate={changePage} />}
      {currentPage === 'view' && <ViewPage />}
      {currentPage === '404' && <NotFoundPage />} */}
      {page}
    </div>
  );
}

export default App;
