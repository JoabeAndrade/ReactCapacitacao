import { useState, useEffect } from 'react'
import  Butao  from './components/Butao'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [contador, setContador] = useState(0);
  const [nome1, setNome1] = useState("Igor");
  const [nome2, setNome2] = useState("Joabe");
  const nomesJuntos = nome1 + nome2;

  function soma() {
    setContador(
      (antigo) => {
        return antigo + 1
    })  
  }

  function mudaNome1(evento: React.ChangeEvent<HTMLInputElement>){
    setNome1(evento.target.value);
  }

  function mudaNome2(evento: React.ChangeEvent<HTMLInputElement>){
    setNome2(evento.target.value);
  }


  return (
  
    <div>
      <h1>Contador</h1>
      <p>{nomesJuntos}</p>
      <input type="text" value={nome1} onChange={mudaNome1}/>
      <input type="text" value={nome2} onChange={mudaNome2}/>
      <Butao titulo="swnsjwn" cor='blue'/>
      <button onClick={soma}>+</button>
    </div>
  )
}

export default App
