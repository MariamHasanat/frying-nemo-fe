import AddPage from "./pages/add/add.component";
import ViewPage from "./pages/view/view.component";
import Header from "./components/core/header/header.component";
import { useState } from "react";

function App() {
    const [currentPage, setCurrentPage] = useState('add');
    return (
        <div>
            <Header img='images/nemo.png' width={100} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            {currentPage === 'add' && <AddPage setCurrentPage={setCurrentPage}/>}
            {currentPage === 'view' &&<ViewPage/>}
        </div>
    );
}

export default App;