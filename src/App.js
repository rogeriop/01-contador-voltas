import React from 'react';

const MostraVoltas = (props) => {
  return (
    <p>
    {props.voltas}<br />
    Voltas
  </p>

  )
}

const MostraTempo = (props) => {
  return (
  <p>
    {props.tempo}<br />
    Tempo médio por Volta
  </p>
  )
}

const Button = (props) => <button>{props.text}</button>

function App() {
  return (
    <div className='App'>
      <MostraVoltas voltas='12'/>
      <Button text='+' />
      <Button text='-' />
      <MostraTempo tempo='01:35' />
      <Button text='Iniciar' />
      <Button text='Reiniciar' />
    </div>
  );
}

export default App
