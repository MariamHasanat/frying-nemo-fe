import AddPage from "./pages/add/add.component";
import ViewPage from "./pages/view/view.component";
import Header from "./components/core/header/header.component";
import NotFound from "./pages/not-found/not-found.component";
import { useState } from "react";
import './index.css';

function App() {
    const [currentPage, setCurrentPage] = useState('404');

    let pathname = window.location.pathname;
    let page = null;
    if (pathname === '/add')
        page = <AddPage />;

    else if (pathname === '/view')
        page = <ViewPage />;

    else
        page = <NotFound />;

    return (
        <div>
            <Header img='images/nemo.png' width={100} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            {page}
            {/* {currentPage === 'add' && <AddPage setCurrentPage={setCurrentPage}/>}
            {currentPage === 'view' &&<ViewPage/>}
            {currentPage === '404' && <NotFound/>} */}
        </div>
    );
}

export default App;