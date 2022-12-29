import React from "react";
import SearchBar from "./SearchBar.jsx";

import "./Nav.css";
import Switch from "./Switch.jsx";
import { useTheme } from "./Theme/Themes";

function Nav({ onSearch }) {
  const { theme } = useTheme();
  return (
    <nav className="navbar">
      <span style={{ color: theme.deleteButton }}>Weather App</span>
      <div className="switch-search">
        <span style={{ marginRight: "40px" }}>
          <SearchBar onSearch={onSearch} />
        </span>
        <Switch />
      </div>
    </nav>
  );
}

export default Nav;
