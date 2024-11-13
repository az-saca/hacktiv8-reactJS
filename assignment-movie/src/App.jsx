import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Movie from "./components/Movie";

function App() {
  return (
    <>
      <Header />

      <div className="container">
        <Movie />
      </div>
    </>
  );
}

export default App;
