import { useState } from 'react'

function Home({erro, onBuscar}) {
         const [entrada, setEntrada] = useState("");
         return (
              <>
                    <h2>Qual a Música?</h2>

                  <input
                    type="text"
                    value={entrada}
                    onChange={(e) => setEntrada(e.target.value)}
                    style={{ padding: "8px", marginRight: "10px" }}
                  />

                  <button onClick={() => onBuscar(entrada)}>
                    Buscar
                  </button>

                  {erro && <p style={{ color: "red" }}>{erro}</p>}
              </>
         );
    }

    export default Home;