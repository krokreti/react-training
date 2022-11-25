import './App.css';
import HelloWorld from './Components/HelloWorld';
import Pessoa from './Components/Pessoa';
import SayMyName from './Components/SayMyName';


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
    </div>
  );
}

export default App;
