import './App.css';
import Evento from './Components/Evento';
import HelloWorld from './Components/HelloWorld';
import List from './Components/List';
import Pessoa from './Components/Pessoa';
import SayMyName from './Components/SayMyName';
import Form from './Components/Form'
import Condicional from './Components/Condicional';
import OutraLista from './Components/OutraLista';
import SeuNome from './Components/SeuNome';
import { useState } from 'react';
import Saudacao from './Components/Saudacao';

function App() {

  const name = "Davi";
  const url = "https://via.placeholder.com/150";
  const meusItens = ['React', 'Vue', 'Angular']
  const [nome, setNome] = useState();

  return (
    <div className="App">
      <h1>Olá React</h1>
      <p> Bem-vindo, {name} </p>
      <img src={url} alt="Minha imagem"/>
      <HelloWorld/>
      <SayMyName nome={name} />
      <SayMyName nome="Beto" />
      <Pessoa nome="Davi" idade="29" profissao="Programador" foto={url}/>
      <List/>
      <Evento/>
      <Form/>
      <h1>Renderização Condicional</h1>
      <Condicional/>
      <h1>Renderização de Listas</h1>
      <OutraLista itens={meusItens} />
      <OutraLista itens={[]} />
      <h1>State Lift</h1>
      <SeuNome setNome={setNome} />
      {nome}
      <Saudacao nome={nome} />

    </div>
  );
}

export default App;
