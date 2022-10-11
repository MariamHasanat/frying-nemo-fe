/* never forget your friend (alt+shift+f) */

// Here we import the components
import AddPage from "./pages/menuPageContainer/page.container";
import Header from "./components/header/header.component";
import ViewPage from "./pages/view/view.container";
import NotFound from "./pages/not-found/not-found.component";

//A function App will render the components
function App() {
  return (
    <div className="pages-container">
      <div className="consistancy-between-pages">
        <Header />
        <AddPage />
        <ViewPage />
        <NotFound />
      </div>
    </div>
  );
}

export default App;
