import AddPage from "./pages/add/add.component";
import { useState } from "react";
import ViewPage from "./pages/add/view/view.component";
import Title from './header/header.comonent';
function App() {
  const [currentPage, setPageName] = useState('add');
const changePage = (newPage) =>{
  setPageName(newPage);
};
  return (
    <div>
      <Title onNavigate ={changePage}/>
      {currentPage ==='add' && <AddPage />}
      {currentPage ==='view' && <ViewPage />}
      <AddPage />
    </div>
  );
}

export default App;
