import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import tmdb from "../services/tmdb";

function Home() {

  const [filmes, setFilmes] = useState([]);

  useEffect(() => {

    async function buscarFilmes() {

      try {

        const resposta = await tmdb.get("/discover/movie", {
          params: {
            sort_by: "popularity.desc",
            page: 1
          }
        });

        setFilmes(resposta.data.results.slice(0, 3));

      } catch (error) {

        console.error("Erro ao buscar filmes populares:", error);

      }

    }

    buscarFilmes();

  }, []);


  return (
    <div className="home">

      {/* HERO */}

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


      {/* FILMES POPULARES */}

      <section className="secao-filmes">

        <h2>Filmes populares</h2>

        <div className="mini-cards">

          {filmes.map((filme) => (

            <div className="mini-card" key={filme.id}>

              <div className="poster">

                {filme.poster_path ? (

                  <img
                    src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                    alt={`Poster do filme ${filme.title}`}
                  />

                ) : (

                  <span>{filme.title}</span>

                )}

              </div>

              <h3>{filme.title}</h3>

              <p>
                {filme.release_date
                  ? filme.release_date.slice(0, 4)
                  : "N/A"}
                {" • "}
                ⭐ {filme.vote_average
                  ? filme.vote_average.toFixed(1)
                  : "N/A"}
              </p>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default Home;