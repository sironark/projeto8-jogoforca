
import { useState } from "react";
import palavras from "./Palavras";
import alfabeto from "./Letras";



export default function Jogo(props){
      let [etapaForca, setetapa] = useState('./assets/img/forca0.png');
      let [palavraChave, setPalavraChave] = useState([])
      let[index, setIndex] = useState('palavraChave hide')
      let [block, setblock] = useState(true)
      let [habilitar, setHabilitar] = useState("nhabilitado")
      let [palavraArray, setPalavraArray] = useState([])
      let [novaPalavraTraco, setNovaPalavra] = useState([])
      let arrayAuxiliar = [];
         
      
      
      function escolherPalavra(){
         
         const palavraEscolhida = palavras[0];
         console.log(palavraEscolhida.length)
         setblock(false)
         setHabilitar("habilitar")
          
         
         for(let i = 0; palavraEscolhida.length > i; i++ ){
          setNovaPalavra(novaPalavraTraco.push("_ "))
          
         }

         for(let i = 0; palavraEscolhida.length > i; i++ ){
            arrayAuxiliar.push(palavraEscolhida[i])
           
            
           }
           setPalavraArray(arrayAuxiliar)
        
         console.log(novaPalavraTraco)
         //setetapa('./assets/img/forca0.png')
         setIndex('palavraChave')
         setPalavraChave(novaPalavraTraco)
      }
      
      
     
      

      function teclaBtn(i){
         const aux = []
         const letraClicada = alfabeto[i];
         let aux2 = []
         aux2 = palavraChave
         
         
         for(let u = 0; u < palavraArray.length; u++){
            if(letraClicada === palavraArray[u]){
               aux.push(u)
            } 
         }


         if(aux.length === 0){
            setetapa('./assets/img/forca1.png')
         }

         
         for (let u = 0; u< aux.length; u++){
            let position = aux[u]
            aux2[position] = letraClicada
            }
      
         
         setPalavraChave(aux2)
         console.log(aux2)
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
        <div className="teclado">
        {alfabeto.map((letra, indice)=>
            <button disabled={block} className={habilitar} onClick={() => teclaBtn(indice)}>{letra}</button>
            )}
      
     
       </div> 
       

        </>
      );
  }
