import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";
import logo from "../src/logo.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <a href="https://kinga-miskiewicz.netlify.app/">
          <img src={logo} alt="logo" className="app-logo img-fluid" />
        </a>
        <main>
          <Dictionary defaultKeyword="fox" />
        </main>
        <footer className="app-footer">
          <small>
            This project was coded by Kinga Miśkiewicz and is{" "}
            <a
              href="https://github.com/kiyooteru/dictionary-project"
              target="_blank"
            >
              open-sourced on GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
