
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './Components/layout/Footer';
import Navbar from './Components/layout/Navbar';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Home from './pages/Home';

function App() {


  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/empresa' element={<Empresa/>}></Route>
          <Route path='/contato' element={<Contato/>}></Route>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
