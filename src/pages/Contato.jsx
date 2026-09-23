import React, { useState } from "react";
import { FaEnvelope, FaUser, FaComment, FaPaperPlane } from "react-icons/fa";

function Contato() {

  const [enviado, setEnviado] = useState(false);

  function enviarFormulario(event) {
    event.preventDefault();
    setEnviado(true);
  }

  return (
    <div className="pagina-contato">

      <section className="contato-hero">

        <span className="contato-destaque">
          FALE CONOSCO
        </span>

        <h1>
          Entre em contato
        </h1>

        <p>
          Tem alguma dúvida, sugestão ou comentário?
          Envie uma mensagem para nós.
        </p>

      </section>


      <section className="contato-area">

        <div className="contato-info">

          <div className="contato-icone">
            <FaEnvelope />
          </div>

          <h2>Vamos conversar?</h2>

          <p>
            Sua opinião é importante para ajudar a melhorar
            cada vez mais o Catálogo Filmes.
          </p>

          <div className="contato-detalhe">
            <FaEnvelope />
            <span>Entre em contato pelo formulário</span>
          </div>

        </div>


        <form
          className="formulario-contato"
          onSubmit={enviarFormulario}
        >

          <div className="campo">

            <label>
              <FaUser />
              Seu nome
            </label>

            <input
              type="text"
              placeholder="Digite seu nome"
              required
            />

          </div>


          <div className="campo">

            <label>
              <FaEnvelope />
              Seu e-mail
            </label>

            <input
              type="email"
              placeholder="Digite seu e-mail"
              required
            />

          </div>


          <div className="campo">

            <label>
              <FaComment />
              Mensagem
            </label>

            <textarea
              placeholder="Escreva sua mensagem..."
              rows="5"
              required
            ></textarea>

          </div>


          <button
            type="submit"
            className="botao-contato"
          >
            <FaPaperPlane />
            Enviar mensagem
          </button>


          {enviado && (
            <p className="mensagem-enviada">
              ✓ Mensagem enviada com sucesso!
            </p>
          )}

        </form>

      </section>

    </div>
  );
}

export default Contato;