import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Pokemon from "./components/Pokemon/Pokemon";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<Pokemon />} />
      </Routes>
    </Router>
  );
}

export default App;
