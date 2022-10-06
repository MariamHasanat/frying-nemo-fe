// Here we import the components
import AddPage from "./pages/pageContainer/page.container";
import Header from "./components/header/header.component";

//A function App will render the components
function App() {
  return (
    <div className="consistancy-header-with-page">
      <Header />
      <AddPage />
    </div>
  );
}

export default App;
