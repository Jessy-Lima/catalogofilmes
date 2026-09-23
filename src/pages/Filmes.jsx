import React, { useEffect, useState } from "react";
import Filme from "../Filme";
import tmdb from "../services/tmdb";

function Filmes() {
  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function buscarFilmes() {
      try {
        const resposta = await tmdb.get("/discover/movie", {
          params: {
            sort_by: "popularity.desc",
            page: 1,
            watch_region: "BR"
          }
        });

        const filmesEncontrados = resposta.data.results;

        const filmesComDisponibilidade = await Promise.all(
          filmesEncontrados.map(async (filme) => {
            try {
              const provedores = await tmdb.get(
                `/movie/${filme.id}/watch/providers`
              );

              const brasil = provedores.data.results?.BR;

              return {
                ...filme,
                assistirUrl: brasil?.link || null
              };

            } catch (error) {
              console.error(
                `Erro ao buscar disponibilidade de ${filme.title}:`,
                error
              );

              return {
                ...filme,
                assistirUrl: null
              };
            }
          })
        );

        setFilmes(filmesComDisponibilidade);

      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
        setErro("Não foi possível carregar os filmes.");
      } finally {
        setCarregando(false);
      }
    }

    buscarFilmes();
  }, []);

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


      {carregando && (
        <p>Carregando filmes...</p>
      )}


      {erro && (
        <p>{erro}</p>
      )}


      <div className="cards">

        {filmes.map((filme) => (

          <Filme
            key={filme.id}

            nome={filme.title}

            ano={
              filme.release_date
                ? filme.release_date.slice(0, 4)
                : "N/A"
            }

            genero="Filme"

            diretor="Não informado"

            avaliacao={
              filme.vote_average
                ? filme.vote_average.toFixed(1)
                : "N/A"
            }

            imagem={
              filme.poster_path
                ? `https://image.tmdb.org/t/p/w500${filme.poster_path}`
                : null
            }

            assistirUrl={filme.assistirUrl}
          />

        ))}

      </div>

    </div>
  );
}

export default Filmes;