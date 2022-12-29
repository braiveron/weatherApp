import React, { useState } from "react";
import "./Switch.css";
import { useTheme } from "./Theme/Themes";

function Switch() {
  const { theme, toggleTheme } = useTheme();
  const [navBar, setNavBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div>
      <label className="switch">
        <input className="offScreen" onClick={toggleTheme} type="checkbox" />
        <span className="slider" />
      </label>
    </div>
  );
}

export default Switch;
