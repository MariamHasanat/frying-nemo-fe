import { useState } from "react";
import AddPage from "./pages/add/add.component";
import View from "./pages/view/view";
import Header from "./core/header/header.component";


function App() {
    const [curPage, setCurPage] = useState('add');

    const changePage = (newPage) => {
        setCurPage(newPage);
    };

    return (
        <div>

            <Header
                onNavigate={changePage}
                currentPage={curPage}
            />
            {
                (curPage === 'add')
                    ? <AddPage onNavigate={changePage} />
                    : <View />
            }

        </div>
    );
}

export default App;
