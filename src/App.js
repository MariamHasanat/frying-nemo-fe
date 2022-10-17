import AddPage from "./pages/add/add.component";
import ViewPage from "./pages/view/view.component";
import Header from "./components/core/header/header.component";
import NotFound from "./pages/not-found/not-found.component";
import { useState } from "react";
import './index.css';

function App() {
    const [currentPage, setCurrentPage] = useState('404');
    return (
        <div>
            <Header img='images/nemo.png' width={100} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            {currentPage === 'add' && <AddPage setCurrentPage={setCurrentPage}/>}
            {currentPage === 'view' &&<ViewPage/>}
            {currentPage === '404' && <NotFound/>}
        </div>
    );
}

export default App;