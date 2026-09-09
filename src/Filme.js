import React from "react";

function Filme({ nome, ano, genero, diretor }) {
  return (
    <div className="card">

      <h2>{nome}</h2>

      <p>📅 Ano: {ano}</p>

      <p>🎬 Gênero: {genero}</p>

      <p>🎥 Diretor: {diretor}</p>

    </div>
  );
}

export default Filme;