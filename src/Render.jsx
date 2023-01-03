import React, { useState } from "react";
import "./Render.css";
import Nav from "./Components/Nav.jsx";
import Cards from "./Components/Cards.jsx";
import { useTheme } from "./Components/Theme/Themes";
/* import swAlert from "@sweetalert/with-react"; */

const APIKEY = "e2b3402e56f288d2b7f1d6d0056238ef";

function Render() {
  const { theme } = useTheme();
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${APIKEY}`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min - 273.15),
            max: Math.round(recurso.main.temp_max - 273.15),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            feels: Math.round(recurso.main.feels_like - 273.15),
            temp: Math.round(recurso.main.temp - 273.15),
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("City not found");
          /*           swAlert(
            <div>
              <h1>Try Again!</h1>
              <h3>City not found</h3>
            </div>
          ); */
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }
  return (
    <div className="render" style={{ backgroundColor: theme.background }}>
      <Nav onSearch={onSearch} />
      <div>
        {cities.length > 0 ? (
          <Cards cities={cities} onClose={onClose} />
        ) : (
          <h2 className="msgCard">Do a search to see it here</h2>
        )}
      </div>
    </div>
  );
}

export default Render;
