import './App.css'

import Home from "./Home"
import Musica from "./Musica"
import basehinos from "./basehinos"
import titulohinos from "./titulohinos"
import { useState } from 'react'

function App() {
      const [tela, setTela] = useState("home");
      const [_, setValor] = useState("");
      const [erro, setErro] = useState("");
      const [estrofeAtual, setEstrofeAtual] = useState(0);
      // const [versos, setVersos] = useState([]);
      const [musica, setMusica] = useState([]);
      const [titulo, setTitulo] = useState("");

      

  //const estrofe = musica[0];
  // const titulo = titulohinos["1"];

        const validarEntrada = (entrada) => {
          if (!/^\d+$/.test(entrada)) {
            setErro("entrada invalida, so aceita numeros");
            return;
          }

          const numero = Number(entrada);
          if (numero <= 0 || numero > 600) {
            setErro("entrada invalida, permite numeros entre 1 e 600 apenas");
            return;
          }

          const m1 = basehinos[entrada];
          const t1 = titulohinos[entrada];
          // const v1 = m1[estrofeAtual].split("|");
          let novosversos = [];
          for (let i = 0; i < m1.length; i++) {
                const v = m1[i].split("|");
                novosversos.push(v); 
          } 
          console.log(novosversos); 
          setValor(entrada);
          setMusica(novosversos);
          setTitulo(t1);
          setErro("");
          setEstrofeAtual(0);
          // setVersos(novosversos);
          setTela("musica");
          // console.log(estrofeAtual);
        };

        const voltarHome = () => {
          setTela("home");
          setValor("");
          setErro("");
          setEstrofeAtual(0);
          setTitulo("");
          setMusica([]);
          // setVersos([]);
        };

        // const proximo = () => {
        //     setEstrofeAtual(e => e + 1);
        //    console.log("Atual ==", estrofeAtual);
        //     const m1 = musica;
        //     if (estrofeAtual >= 0) {
        //       const v1 = m1[estrofeAtual].split("|");
        //       setVersos(v1);
        //     }
        // } 

        // const anterior = () => {
        //   setEstrofeAtual(e => e - 1);
        //   console.log("Atual ==", estrofeAtual);
        //   const m1 = musica;
        //    if (estrofeAtual < musica.length) {
        //       const v1 = m1[estrofeAtual].split("|");
        //       setVersos(v1);
        //     }
        // } 


  return (
              <>
                 <h1>Letra e Cifra Melódica HASD</h1>
                 <div style={{ textAlign: "center", marginTop: "80px" }}>
                 {tela === "home" && (
                 <Home
                    erro={erro}
                    onBuscar={validarEntrada}
                  />
      )}

      {tela === "musica" && (
                 <Musica
                    titulo={titulo} 
                    musica={musica}
                    estrofeAtual={estrofeAtual}
                    onProximo={() => setEstrofeAtual(e => e + 1)}
                    onVoltar={() => setEstrofeAtual(e => e - 1)}
                    onHome={voltarHome}
                  />
      )}
    </div>
              </>
  )
}

export default App
