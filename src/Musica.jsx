import Estrofe from "./Estrofe"
function Musica({
                  titulo,
                  musica,
                  estrofeAtual,
                  onProximo,
                  onVoltar,
                  onHome,
                }) {
          return (
              <>
                <h3>Música {titulo}</h3>

                <Estrofe versos={musica} />

                <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                  <button onClick={onVoltar} disabled={estrofeAtual < 0}>
                    Voltar
                  </button>

                  <button
                    onClick={onProximo}
                    disabled={estrofeAtual >= musica.length - 1}
                  >
                    Prosseguir
                  </button>

                  <button onClick={onHome}>
                    Home
                  </button>
                </div>
              </>
            );
    }

export default Musica;