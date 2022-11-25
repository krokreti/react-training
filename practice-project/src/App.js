import './App.css';

function App() {

  const name = "Davi";
  const url = "https://via.placeholder.com/150";

  return (
    <div className="App">
      <h1>Olá React</h1>
      <p> Bem-vindo, {name} </p>
      <img src={url} alt="Minha imagem"/>
    </div>
  );
}

export default App;
