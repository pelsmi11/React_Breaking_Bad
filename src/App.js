import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled'
import Frase from './components/Frase';

const Contenedor = styled.div`
display: flex;
align-items: center;
paddig-top: 5rem;
flex-direction: column;
`

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family:  Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size: .8s ease;

  :hover {
    cursor: pointer;
    background-size:400px; 
  }
`;

function App() {

  //state de frases
  const [frase, guardarFrase] = useState({});

  const consultarAPI= async () => {
    const api = await fetch('https://breakingbadapi.com/api/quote/random');
    const frase = await api.json();
    //frase.id=frase.quote_id;
    guardarFrase(frase[0]);
  }

  //cargar frase al entrar a la pagina
  useEffect(()=>{
    consultarAPI()
  },[]);

  return (
    <Contenedor>

      <Frase
      key = {frase.quote_id}
      frase ={frase}
      />
        
      <Boton
      onClick={consultarAPI}
      >
        Obtener Frase
      </Boton>
    </Contenedor>
    
  );
}

export default App;
