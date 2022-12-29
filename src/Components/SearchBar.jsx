import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity("");
      }}
      role="search"
    >
      <label for="search">Search for stuff</label>
      <input
        id="search"
        type="search"
        placeholder="Search..."
        required
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="search-button" type="submit">
        Go
      </button>
    </form>
  );
}
