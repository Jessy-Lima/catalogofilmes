import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Filmes from "./pages/Filmes";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

function App() {
  return (
    <BrowserRouter>

      <header className="cabecalho">

        <div className="logo">
          🎬 <span>CATÁLOGO</span>
        </div>

        <nav>
          <Link to="/">Início</Link>
          <Link to="/filmes">Filmes</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
        </nav>

        <div className="perfil">
          👤
        </div>

      </header>

      <main>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/filmes" element={<Filmes />} />

          <Route path="/sobre" element={<Sobre />} />

          <Route path="/contato" element={<Contato />} />

        </Routes>

      </main>

    </BrowserRouter>
  );
}

export default App;