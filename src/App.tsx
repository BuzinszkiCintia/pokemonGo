import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Pokemon from "./components/Pokemon/Pokemon";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/pokemongo/" element={<Home />} />
      <Route path="/pokemongo/:name" element={<Pokemon />} />
    </Routes>
  );
}

export default App;
