import React, { Component } from "react";
import MiComponente from "./MiComponente";
import Peliculas from "./Peliculas";

class SeccionPruebas extends Component {
  contador = 0;

  state = {
    contador: 0,
  };

  HolaMundo(nombre, edad) {
    var presentacion = (
      <div>
        <h2>Hola, soy {nombre}</h2>
        <h3>Tengo, {edad} </h3>
      </div>
    );
    return presentacion;
  }
  sumar= (e) => {
   
    this.setState({
      contador: this.state.contador + 1,
    });
  }
  restar = (e) =>{
    
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  

  render() {
    var nombre = "Jaume Ventura";
    var edad = "60 tacos";
    return (
      <section id="content">
        <h2 className="subheader">Ultimos artículos</h2>
        <p>Hola Bienvenido al curso que intenta hacer Jaume Ventura</p>
        <h2 className="subheader">Funciones y JSX Básico</h2>
        {this.HolaMundo(nombre, edad)}
        <h2 className="subheader">Componentes</h2>
        <section className="componentes">
          <p>
          <MiComponente />
          </p>
          <p>
          <Peliculas />
          </p>
         

        <h2 className="subheader">Estado</h2>
        Contador: {this.state.contador}
        <p>
          <input type="button" value="Sumar" onClick={this.sumar} />
          <input
            type="button"
            value="Restar"
            onClick={this.restar}
          />
        </p>
        </section>
      </section>
    );
  }
}

export default SeccionPruebas;
