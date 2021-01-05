import logo from './assets/images/logo.svg';
import logo2 from './assets/images/logo2.svg';
import './assets/css/App.css';
//importar componentes
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';

function HolaMundo (nombre, edad) {
  
  var presentacion = <div>
         <h2>Hola, soy {nombre}</h2>
         <h3>Tengo, {edad} </h3>
         </div>;
  return presentacion;
} 

function App() {
var nombre = "Jaume Ventura";
var edad = "60 tacos";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/><br/><br/><br/><br/>
        <img src={logo2} className="App-logo2" alt="logo2" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {HolaMundo(nombre,edad)}
        <section className = "componentes">
            <MiComponente/> 
            <hr/>
            <Peliculas/>
            <Peliculas/>
      </section>
      <section className = "componentes">
      <MiComponente/>
      </section>
      <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
