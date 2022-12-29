import React from "react";
import "./Cards.css";
import { useTheme } from "./Theme/Themes";

import Card from "./Card.jsx";

export default function Cards({ cities, onClose }) {
  const { theme } = useTheme();

  return (
    <div className="cards" style={{ backgroundColor: theme.background }}>
      {cities.map((c) => (
        <Card
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          feels={c.feels}
          temp={c.temp}
          onClose={() => onClose(c.id)}
        />
      ))}
    </div>
  );
}
