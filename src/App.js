import React from "react";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Page";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/WebDemo">
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
