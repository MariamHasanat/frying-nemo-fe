import Header from "./components/common/header/header.component";
import AddPage from "./pages/add/add.component";

function App() {
  return (
    <div>
      <Header img = "./nemo.svg.svg" title = "Frying Nemo"/>
      <AddPage />
    </div>
  );
}

export default App;
