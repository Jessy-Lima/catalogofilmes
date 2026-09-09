import React from "react";
import Filme from "./Filme";

function App() {
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

export default App;