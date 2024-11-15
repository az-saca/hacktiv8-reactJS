import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Movie from "./components/Movie";
import Footer from "./components/Footer";
import { getMovies} from "./Api";
import { useEffect, useState } from "react";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((res) => {
      console.log(res);
      setMovies(res);
    });
  }, []);

  const handleSearch =  (q) => {
    // const query = await searchMovies(q);
    setMovies(q);
    console.log({ query: q });
  }

  return (
    <>
      <div className="app-header">
        <Header />
        <Search onSearch={handleSearch} />
      </div>

      <div className="container">
        <Movie movies={movies} />
      </div>

      <Footer />
    </>
  );
}

export default App;
