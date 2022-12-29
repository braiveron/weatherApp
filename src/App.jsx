import React from "react";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./Components/Theme/Themes";
import Render from "./Render";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Render />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
