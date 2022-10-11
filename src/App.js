/* never forget your friend (alt+shift+f) */

// Here we import the components
import AddPage from "./pages/pageContainer/page.container";
import Header from "./components/header/header.component";

//A function App will render the components
function App() {
  return (
    <div className="pages-container">
      <div className="consistancy-between-pages">
        <Header />
        <AddPage />
      </div>
    </div>
  );
}

export default App;
