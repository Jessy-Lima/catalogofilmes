import React from "react";
import { FaStar, FaPlay } from "react-icons/fa";

function Filme({
  nome,
  ano,
  genero,
  diretor,
  avaliacao,
  imagem,
  assistirUrl
}) {
  function assistirFilme() {
    if (assistirUrl) {
      window.open(assistirUrl, "_blank", "noopener,noreferrer");
    } else {
      alert("Não encontramos onde este filme está disponível.");
    }
  }

  return (
    <div className="card">

      <div className="poster">

        {imagem ? (
          <img
            src={imagem}
            alt={`Poster do filme ${nome}`}
          />
        ) : (
          <span>{nome}</span>
        )}

      </div>


      <div className="card-conteudo">

        <div className="card-titulo">

          <h2>{nome}</h2>

          <span className="avaliacao">
            <FaStar /> {avaliacao}
          </span>

        </div>


        <p className="ano-genero">
          {ano} • {genero}
        </p>


        <p className="diretor">
          Diretor: {diretor}
        </p>


        <button
          className="botao-card"
          onClick={assistirFilme}
        >
          <FaPlay /> Assistir
        </button>

      </div>

    </div>
  );
}

export default Filme;