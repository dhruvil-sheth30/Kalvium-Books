import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SearchQueryContext } from "../../App";
import "./Navbar.css";

function Navbar() {
  const { searchQuery, setSearchQuery } = useContext(SearchQueryContext);
  const [searchInput, setSearchInput] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
    setSearchInput("");
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    setSearchInput(searchQuery);
  }, [searchQuery]);

  return (
    <nav>
      <Link to="/" className="wordmark" onClick={() => setSearchQuery("")}>
        <img src="./logo.svg" alt="" />
        <span>Books</span>
      </Link>
      <form className="search-container" onSubmit={handleSearch}>
        <input
          className="search"
          type="text"
          placeholder="Search Books"
          value={searchInput}
          onChange={handleInputChange}
        />
        <button className="search-btn" type="submit">
          <img className="search-img" src="./search.svg" alt="" />
        </button>
      </form>

      <div className="cta-register">
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
