import './App.css';
import HelloWorld from './Components/HelloWorld';

function App() {

  const name = "Davi";
  const url = "https://via.placeholder.com/150";

  return (
    <div className="App">
      <h1>Olá React</h1>
      <p> Bem-vindo, {name} </p>
      <img src={url} alt="Minha imagem"/>
      <HelloWorld/>
    </div>
  );
}

export default App;
