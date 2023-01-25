import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>
        <footer className="app-footer">
          <small>This project was coded by Kinga Miśkiewicz</small>
        </footer>
      </div>
    </div>
  );
}
