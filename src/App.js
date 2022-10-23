import AddPage from "./pages/add/add.component";
import ViewPage from "./common/view/view.component";
import Header from './common/header/header.component';
import NotFoundPage from "./pages/add/not-found";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  // const [currentPage,setCurrentPage]=useState('add');
  // const changePage=(nwePage)=>{
  //     setCurrentPage(nwePage);
  // }
  // const pathname = window.location.pathname;
  // let page = '';
  // if (pathname === '/add') {
  //   page = <AddPage />;
  // } else if (pathname === '/view') {
  //   page = <ViewPage />;
  // }else{
  //   page=<NotFoundPage/>
  // }

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/add/*" element={<AddPage />} />
          <Route path="/view" element={<ViewPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

