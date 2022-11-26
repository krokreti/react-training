import './App.css';
import Evento from './Components/Evento';
import HelloWorld from './Components/HelloWorld';
import List from './Components/List';
import Pessoa from './Components/Pessoa';
import SayMyName from './Components/SayMyName';
import Form from './Components/Form'




function App() {

  const name = "Davi";
  const url = "https://via.placeholder.com/150";

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
    </div>
  );
}

export default App;
