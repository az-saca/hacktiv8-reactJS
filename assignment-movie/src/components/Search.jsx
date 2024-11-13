import React, { useState } from "react";

export default function Search() {
    // const [search, setSearch] = useState("");
    // const [movies, setMovies] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    
    // const fetchMovies = async () => {
    //     try {
    //     setLoading(true);
    //     const response = await fetch(
    //         `https://www.omdbapi.com/?s=${search}&apikey=263d22d8`
    //     );
    //     const data = await response.json();
    //     if (data.Response === "True") {
    //         setMovies(data.Search);
    //         setError(null);
    //     } else {
    //         setError(data.Error);
    //         setMovies([]);
    //     }
    //     } catch (error) {
    //     setError(error.message);
    //     setMovies([]);
    //     } finally {
    //     setLoading(false);
    //     }
    // };
    
    return (
      <form className="d-flex nav-search" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          <i className="bi bi-search"></i>
        </button>
      </form>
    );
}
