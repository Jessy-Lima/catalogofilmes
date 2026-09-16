import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Filme from "./Filme";

function Home() {
  return (
    <div className="pagina-inicio">
      <h1>Catálogo de Filmes</h1>

      <p>
        Bem-vindo ao nosso catálogo de filmes!
      </p>

      <p>
        Aqui você pode encontrar informações sobre alguns filmes.
      </p>

      <Link to="/filmes" className="botao">
        Ver filmes
      </Link>
    </div>
  );
}

function Filmes() {
  return (
    <div className="pagina">
      <h1>Catálogo de Filmes</h1>

      <div className="cards">

        <Filme
          nome="Matrix"
          ano="1999"
          genero="Ficção Científica"
          diretor="Lana e Lilly Wachowski"
        />

        <Filme
          nome="Interestelar"
          ano="2014"
          genero="Ficção Científica"
          diretor="Christopher Nolan"
        />

        <Filme
          nome="O Poderoso Chefão"
          ano="1972"
          genero="Drama / Policial"
          diretor="Francis Ford Coppola"
        />

      </div>
    </div>
  );
}

function Sobre() {
  return (
    <div className="pagina-texto">
      <h1>Sobre Nós</h1>

      <p>
        Este projeto é um catálogo de filmes desenvolvido
        utilizando React.
      </p>

      <p>
        O objetivo é apresentar informações sobre diferentes
        filmes de maneira simples e organizada.
      </p>
    </div>
  );
}

function Contato() {
  return (
    <div className="pagina-texto">
      <h1>Contato</h1>

      <p>
        Entre em contato conosco para saber mais sobre o projeto.
      </p>

      <p>
        📧 Email: contato@catalogofilmes.com
      </p>

      <p>
        📱 Telefone: (11) 99999-9999
      </p>
    </div>
  );
}

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