import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      <section className="hero">

        <div className="hero-conteudo">

          <span className="destaque">
            FILME EM DESTAQUE
          </span>

          <h1>INTERESTELAR</h1>

          <p className="hero-info">
            ⭐ 9.2 &nbsp; | &nbsp; 2014 &nbsp; | &nbsp; Ficção Científica
          </p>

          <p className="descricao">
            Uma equipe de exploradores viaja através de um
            buraco de minhoca em busca de um novo lar para
            a humanidade.
          </p>

          <div className="hero-botoes">

            <Link to="/filmes" className="botao-principal">
              ▶ Assistir agora
            </Link>

            <Link to="/filmes" className="botao-secundario">
              + Minha lista
            </Link>

          </div>

        </div>

      </section>


      <section className="secao-filmes">

        <h2>Filmes populares</h2>

        <div className="mini-cards">

          <div className="mini-card">
            <div className="poster poster-matrix">
              <span>MATRIX</span>
            </div>

            <h3>Matrix</h3>
            <p>1999 • Ficção Científica</p>
          </div>


          <div className="mini-card">
            <div className="poster poster-interestelar">
              <span>INTERESTELAR</span>
            </div>

            <h3>Interestelar</h3>
            <p>2014 • Ficção Científica</p>
          </div>


          <div className="mini-card">
            <div className="poster poster-chefao">
              <span>O PODEROSO CHEFÃO</span>
            </div>

            <h3>O Poderoso Chefão</h3>
            <p>1972 • Drama</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;