import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Clients from "./pages/Clients";
import Features from "./pages/Features";


function App() {
  return (
    <div className="dark:bg-neutral-800 dark:text-neutral-300">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </div>
  );
}

export default App;
