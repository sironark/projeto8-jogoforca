
import { useState } from "react";
import palavras from "./palavras";
import alfabeto from "./Letras";



export default function Jogo(){
      let [etapaForca, setetapa] = useState('./assets/img/forca0.png');
      let [palavraChave, setPalavraChave] = useState([])
      let[index, setIndex] = useState('palavraChave hide')
      let [block, setblock] = useState(true)
      let [habilitar, setHabilitar] = useState("nhabilitado")
      let [palavraArray, setPalavraArray] = useState([])
      let [novaPalavraTraco, setNovaPalavra] = useState([])
      let arrayAuxiliar = [];
      let [count, setCount] =useState(0) ;
      let [contador,setContador] = useState(0);
      
      
      function escolherPalavra(){
         
         if(contador===1){
            window.location.reload(false);
            console.log("oi")
         }

         palavras.sort(()=> Math.random() - 0.5);
         const palavraEscolhida = palavras[6];
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
         setContador(1)
         
      }
      
      
     
      

      function teclaBtn(letra, indice){
         let aux = []
         const letraClicada = alfabeto[indice];
         let aux2 = []
         aux2 = [...palavraChave]

         let perdeuPalavra = []
         perdeuPalavra = [...palavraArray]

         
         
         for(let u = 0; u < palavraArray.length; u++){
            if(letraClicada === palavraArray[u]){
               aux.push(u)
            } 
         }
 

         for (let u = 0; u< aux.length; u++){
            let position = aux[u]
            aux2[position] = letraClicada
            }
      
         
         setPalavraChave(aux2)
         console.log(aux2)


         if(aux2.find(element => element === '_ ') === undefined){
            setblock(true)
            setIndex("verde")
            setHabilitar("nhabilitado")

         }
         
         if(aux.length === 0){
            const auxCount = count + 1
                   
            setCount(auxCount) 

            const fotoEtapa = `./assets/img/forca${String(auxCount)}.png`
            setetapa(fotoEtapa)
            aux = []

            if(auxCount === 6){
               setIndex("vermelha")
               setblock(true)
               setPalavraChave(perdeuPalavra)
               setHabilitar("nhabilitado")
               
            }
            

         }

            
      }
      
      


      return(
          <>
         <div class="topJogo">
         <img src={etapaForca} alt="forca" data-test="game-image"/>
         <div className="topoDireito">
         <button data-test="choose-word" onClick={escolherPalavra}>Escolher Palavra</button>
         <div data-test="word" className={index}>{palavraChave}</div>
        </div>
        </div>
        <div className="teclado">
        {alfabeto.map((letra, indice, props)=>
            <button data-test="letter" disabled={block} className={habilitar} onClick={() => teclaBtn(letra, indice)}>{letra}</button>
            )}
      
     
       </div> 
       

        </>
      );
  }
