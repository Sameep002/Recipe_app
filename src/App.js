import Navbar from "./components/Navbar";
import SearchRecipes from "./components/SearchRecipes";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Products from "./components/Products";
import Nutrition from "./components/Nutrition";
import Landingpg from "./components/Landingpg";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landingpg />}/>
          <Route path="/recipes" element={<SearchRecipes/>}/>
          {/* <Route path="/products" element={<Products />}/> */}
          <Route path="/nutrition" element={<Nutrition />}/>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
