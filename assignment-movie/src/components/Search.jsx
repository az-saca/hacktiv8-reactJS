import { useState } from "react";
import { searchMovies } from "../Api";

// eslint-disable-next-line react/prop-types
export default function Search({onSearch}) {
  const [query, setQuery] = useState("")
  const handleChange = async (e) => {

    e.preventDefault()
    const res = await searchMovies(query)
    onSearch(res)
  }

    return (
      <form
        className="d-flex nav-search"
        id="nav-search"
        role="search"
        onSubmit={handleChange}>
        <input
          className="form-control me-2"
          id="search"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-outline-success" id="btn-submit" type="submit" >
          <i className="bi bi-search"></i>
        </button>
      </form>
    );
}
