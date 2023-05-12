import { useState } from "react";
import palavras from "./Palavras";

export default function LogicaJogo(){
    let [etapaForca, setetapa] = useState();
    let [palavraChave, setPalavraChave] = useState([])
    let[index, setIndex] = useState('palavraChave hide')
    
    function escolherPalavra(){
      let novaPalavra = []
      const palavraEscolhida = palavras[0];
        console.log(palavraEscolhida.length)
       
        for(let i = 0; palavraEscolhida.length > i; i++ ){
        novaPalavra.push("_ ")
       }
       console.log(novaPalavra)
       setetapa('./assets/img/forca0.png')
       setIndex('palavraChave')
       setPalavraChave(novaPalavra)
    }
    
    
    return(
        <>
       <div class="topJogo">
       <img src={etapaForca} alt="forca"/>
       <div className="topoDireito">
       <button  onClick={escolherPalavra}>Escolher Palavra</button>
       <div className={index}>{palavraChave}</div>
      </div>
      </div>
      </>
    );
}