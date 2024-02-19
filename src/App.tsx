import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import { useState } from "react";
import Hotels from "./pages/Hotels";
import "./i18n";
import Contact from "./pages/Contact";
import Taxis from "./pages/Taxis";
import Gifts from "./pages/Gifts";
import Church from "./pages/Church";
import Celebration from "./pages/Celebration";
import Buses from "./pages/Buses";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Routes>
        <Route path={"home"} element={<Home isMenuOpen={isMenuOpen} />} />
        <Route path={"ceremony"} element={<Church isMenuOpen={isMenuOpen} />} />
        <Route
          path={"celebration"}
          element={<Celebration isMenuOpen={isMenuOpen} />}
        />
        <Route path={"hotels"} element={<Hotels isMenuOpen={isMenuOpen} />} />
        <Route path={"buses"} element={<Buses isMenuOpen={isMenuOpen} />} />
        <Route path={"taxis"} element={<Taxis isMenuOpen={isMenuOpen} />} />
        <Route path={"gifts"} element={<Gifts isMenuOpen={isMenuOpen} />} />
        <Route path={"contact"} element={<Contact isMenuOpen={isMenuOpen} />} />
        <Route path="*" element={<Navigate to={"home"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
