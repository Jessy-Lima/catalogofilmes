import React from "react";
import { Link } from "react-router-dom";
import { FaFilm, FaHeart, FaStar, FaSearch } from "react-icons/fa";

function Sobre() {
  return (
    <div className="pagina-sobre">

      <section className="sobre-hero">

        <span className="sobre-destaque">
          SOBRE O PROJETO
        </span>

        <h1>
          Seu catálogo de filmes
          <span> em um só lugar.</span>
        </h1>

        <p>
          O Catálogo Filmes foi criado para tornar a busca por filmes
          mais simples, bonita e divertida.
        </p>

      </section>


      <section className="sobre-conteudo">

        <div className="sobre-card">

          <div className="sobre-icone">
            <FaFilm />
          </div>

          <h2>Um catálogo feito para você</h2>

          <p>
            Aqui você pode descobrir filmes, conferir suas avaliações,
            conhecer novos títulos e encontrar informações sobre
            diferentes produções.
          </p>

        </div>


        <div className="sobre-card">

          <div className="sobre-icone">
            <FaSearch />
          </div>

          <h2>Descubra novos filmes</h2>

          <p>
            Nossa plataforma utiliza dados de filmes para apresentar
            títulos populares e ajudar você a encontrar algo interessante
            para assistir.
          </p>

        </div>


        <div className="sobre-card">

          <div className="sobre-icone">
            <FaHeart />
          </div>

          <h2>Feito com carinho</h2>

          <p>
            Este projeto foi desenvolvido como uma forma de colocar
            conhecimentos de desenvolvimento web em prática.
          </p>

        </div>

      </section>


      <section className="sobre-final">

        <FaStar />

        <h2>
          Encontre seu próximo filme favorito.
        </h2>

        <p>
          Explore nosso catálogo e descubra novas histórias.
        </p>

        <Link to="/filmes" className="botao-sobre">
          Explorar filmes
        </Link>

      </section>

    </div>
  );
}

export default Sobre;