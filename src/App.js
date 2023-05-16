import { useState } from "react";
import palavras from "./palavras";




import forca0 from './assets/img/forca0.png'
import forca1 from './assets/img/forca1.png'
import forca2 from './assets/img/forca2.png'
import forca3 from './assets/img/forca3.png'
import forca4 from './assets/img/forca4.png'
import forca5 from './assets/img/forca5.png'
import forca6 from './assets/img/forca6.png'

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const imagens = [forca0, forca1,forca2,forca3,forca4,forca5,forca6]

export default function App(){

        const [palavraSorteada,setPalavraSorteada] = useState([]);
        const [palavraDoJogo, setPalavraDoJogo] = useState([]);
        const [letraTeclada,setLetraTeclada] = useState([...alfabeto]);
        const [erros, setErros] = useState(0);
        const [classePalavra, setClassePalavra] = useState('preto')
      
      function escolherPalavra(){
        setLetraTeclada([])
        setClassePalavra('preto')
        setErros(0)

        const indiceSorteado = Math.floor(Math.random()* palavras.length);
        
        const palavra = palavras[indiceSorteado];
        
        const palavraArray = palavra.split('')
        setPalavraSorteada(palavraArray);

        const tracos = palavraArray.map(letra => ' _');
        console.log(tracos);
        setPalavraDoJogo(tracos);
        console.log(palavraArray);


      }


      function teclaBtn(letra){
        
        const novo = [...letraTeclada, letra];
        setLetraTeclada(novo);
        

        if(palavraSorteada.includes(letra)){
            const novaPalavra = [...palavraDoJogo];
            
            palavraSorteada.forEach( (l, i) => {
                if(l === letra){
                    novaPalavra[i] = l;
                }
                
            } )

            setPalavraDoJogo(novaPalavra);
            console.log(novaPalavra);

            if(novaPalavra.join('') === palavraSorteada.join('')){
               
                setClassePalavra('verde');
            }
           

        }else{
            const countErro = erros + 1;
            setErros(countErro);
            if(countErro === 6){
                const novoAlf = [...alfabeto];
                setLetraTeclada(novoAlf);
                setPalavraDoJogo(palavraSorteada);

                const novoClasse = 'vermelha';
                setClassePalavra(novoClasse);
            }
        }

        

      }
      
     


      return(
          <>
         <div className="topJogo">
         <img src={imagens[erros]} alt="forca" data-test="game-image"/>
         <div className="topoDireito">
         <button data-test="choose-word" onClick={escolherPalavra}>Escolher Palavra</button>
         <div data-test="word" className={classePalavra}>{palavraDoJogo}</div>
        </div>
        </div>

        <div className="teclado">
        {alfabeto.map((letra)=>
            <button data-test="letter"
            disabled={letraTeclada.includes(letra)} 
            key={letra} 
            onClick={() => teclaBtn(letra)}
            >
            {letra}
            </button>

            )}     
       </div> 
       

        </>
      );
  }







