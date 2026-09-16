import React from "react";
import Filme from "../Filme";

function Filmes() {
  return (
    <div className="pagina-filmes">

      <div className="titulo-pagina">

        <span>CATÁLOGO</span>

        <h1>Todos os filmes</h1>

        <p>
          Explore nossa seleção de filmes.
        </p>

      </div>


      <div className="filtros">

        <button className="filtro-ativo">
          Todos
        </button>

        <button>
          Ação
        </button>

        <button>
          Drama
        </button>

        <button>
          Ficção Científica
        </button>

      </div>


      <div className="cards">

        <Filme
          nome="Matrix"
          ano="1999"
          genero="Ficção Científica"
          diretor="Lana e Lilly Wachowski"
          avaliacao="8.7"
          classe="poster-matrix"
        />

        <Filme
          nome="Interestelar"
          ano="2014"
          genero="Ficção Científica"
          diretor="Christopher Nolan"
          avaliacao="9.2"
          classe="poster-interestelar"
        />

        <Filme
          nome="O Poderoso Chefão"
          ano="1972"
          genero="Drama / Policial"
          diretor="Francis Ford Coppola"
          avaliacao="9.2"
          classe="poster-chefao"
        />

      </div>

    </div>
  );
}

export default Filmes;