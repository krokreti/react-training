import Card from "./components/UI/Card";
import styles from './App.module.css'
import Button from "./components/UI/Button";

function App() {

  const alertando = () => {
    alert('ta funfando')
  }

  return (
    <div className={styles.app}>
      <Card>
        <Button title={'Add new User'} onClick={alertando}/>
      </Card>
    </div>
  );
}

export default App;
