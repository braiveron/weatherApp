import React from "react";
import "./Card.css";
import { useTheme } from "./Theme/Themes";

export default function Card({
  min,
  max,
  name,
  img,
  feels,
  temp,
  onClose,
  id,
}) {
  const { theme } = useTheme();

  return (
    <div
      className="card"
      style={{
        backgroundColor: theme.cardBackground,
        boxShadow: theme.cardShadow,
        color: theme.textColor,
      }}
    >
      <button
        onClick={onClose}
        className="card-button"
        style={{ backgroundColor: theme.deleteButton }}
      >
        X
      </button>

      <div className="card-body">
        <h5 className="card-title">{name}</h5>

        <div className="card-circle" style={{ border: theme.circle }}>
          <p className="temp">{temp}°C</p>
          <img
            className="iconoClima"
            src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
            width="100"
            height="100"
            alt=""
          />
          <p>RealFeel {feels}°C</p>
        </div>
        <div className="min-max">
          <p>Min {min}°C</p>

          <p>Max {max}°C</p>
        </div>
      </div>
    </div>
  );
}
