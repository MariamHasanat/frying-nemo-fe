import AddPage from "./pages/add/add.component";
import Header from "./components/core/header/header.component";

function App() {
    return (
        <div>
            <Header img='images/nemo.png' width={100} />
            <AddPage />
        </div>
    );
}

export default App;
