import { useState } from "react";







export default function Jogo(){
   let [etapaForca, setetapa] = useState('./assets/img/forca0.png')
   
   
    return(
       <>
       <div class="topJogo">
        <img src={etapaForca} alt="forca"/>
        <button onClick={""}>Escolher Palavra</button>
       </div>
       
       </>
        
    );
}