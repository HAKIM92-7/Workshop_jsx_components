import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar';
import {handleAlert} from './components/Navbar' ; 
import Slide from './components/Slide';
import Cards from './components/Cards';

function App() {

  
 
  return (
   <div>
  <Navbar />
  <Slide/>
  <Cards/>
  <button onClick={()=> handleAlert()}> Press</button>
  </div>
  );
}

export default App;
