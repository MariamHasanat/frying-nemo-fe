import { useState } from "react";
import Header from "./components/common/header/header.component";
import AddPage from "./pages/add/add.component";
import View from "./pages/view/view";


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
