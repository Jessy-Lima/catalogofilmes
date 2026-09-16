import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="pagina-inicio">

      <h1>🎬 Catálogo de Filmes</h1>

      <p>
        Bem-vindo ao nosso catálogo de filmes!
      </p>

      <p>
        Aqui você pode encontrar informações sobre diversos filmes.
      </p>

      <Link to="/filmes" className="botao">
        Ver filmes
      </Link>

    </div>
  );
}

export default Home;