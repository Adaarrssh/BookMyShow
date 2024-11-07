import "./App.css";
import CategoryBar from "./Components/CategoryBar";
import Navbar from "./Components/Navbar";
import MovieCards from "./Components/MovieCards";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CategoryBar />
      <MovieCards />
    </div>
  );
}

export default App;
