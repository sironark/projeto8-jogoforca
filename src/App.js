import Jogo from "./Jogo";
import React from 'react';
import ReactDOM from 'react-dom/client';
//import reportWebVitals from './reportWebVitals';


export default function App(){
    
    return(
        <div class="containerJogo">
        <Jogo />
        
        </div>
    );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
