import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import { useState } from "react";
import Hotels from "./pages/Hotels";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Routes>
        <Route path={"home"} element={<Home isMenuOpen={isMenuOpen} />} />
        <Route path={"hotels"} element={<Hotels isMenuOpen={isMenuOpen} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
