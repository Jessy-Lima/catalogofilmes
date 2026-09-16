import React from "react";

function Filme({
  nome,
  ano,
  genero,
  diretor,
  avaliacao,
  classe
}) {

  return (
    <div className="card">

      <div className={`poster ${classe}`}>

        <span>{nome}</span>

      </div>


      <div className="card-conteudo">

        <div className="card-titulo">

          <h2>{nome}</h2>

          <span className="avaliacao">
            ⭐ {avaliacao}
          </span>

        </div>


        <p className="ano-genero">
          {ano} • {genero}
        </p>


        <p className="diretor">
          Diretor: {diretor}
        </p>


        <button className="botao-card">
          ▶ Assistir
        </button>

      </div>

    </div>
  );
}

export default Filme;