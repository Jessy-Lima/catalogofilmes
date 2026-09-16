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

        <h1>🎬 Catálogo de Filmes</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/filmes">Filmes</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
        </nav>

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