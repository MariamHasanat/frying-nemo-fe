import {BrowserRouter , Route , Routes , Navigate} from 'react-router-dom'
import ViewItemPage from './pages/view/ViewItem/ViewItemPage';
import Notfound from "./pages/not-found/Notfound";
import AddPage from "./pages/add/add.component";
import ViewPage from "./pages/view/ViewPage";
import Header from "./logo/Header";
import './common.css';

function App() {
 
  return (
    <div>
      <BrowserRouter>
         <Header />
        <Routes>
          <Route path="/" element={<Navigate to='/view' replace/>}/>
          <Route path="/add" element={<AddPage />}/>
          <Route path="/view" element={<ViewPage />}/>
          <Route path="/view/:id" element = {<ViewItemPage />} />
          <Route path="/*" element={<Notfound />}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
