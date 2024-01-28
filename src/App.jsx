import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Clients from "./pages/Clients";
import Features from "./pages/Features";


function App() {
  return (
    <div className="dark:bg-primary dark:text-white font-poppins">
      <header className="fixed w-full"><Navbar /></header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </div>
  );
}

export default App;
