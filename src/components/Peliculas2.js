import React, { Component } from "react";
import Pelicula from "./Pelicula";
class Peliculas2 extends Component {
  state = {
    // peliculas: [
    //   {
    //     titulo: "Batman vs Superman",
    //     image:
    //       "https://elcomercio.pe/resizer/LobdjKJ3Ks8QE0_30tVu5iSNrm8=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/54VKEH4LGRDYZE67ZQPJNQ6N7U.jpg",
    //   },
    //   {
    //     titulo: "Gran Torino",
    //     image: "https://assets.puzzlefactory.pl/puzzle/265/858/original.jpg",
    //   },
    //   {
    //     titulo: "Looper",
    //     image: "https://i.ebayimg.com/images/g/UqgAAOSwFFZexuA1/s-l300.jpg",
    //   },
    // ],
    // nombre: "Jaume Ventura",
    // favorita:  {}
  };
  cambiarTitulo = () => {
    var { peliculas } = this.state;
    var random = Math.floor(Math.random() *3);
    // peliculas[0].titulo = "Batman Begins";
    peliculas[random].titulo = "Batman Begins" +random;
    alert(random);
    this.setState({
      peliculas: peliculas
    });
  };
    favorita = (pelicula, indice) => {
        console.log("FAVORITA MARCADA");
        console.log(pelicula, indice);
        this.setState({
            favorita: pelicula
        });
    }
    componentWillMount(){
        this.setState({
            peliculas: [
                {
                  titulo: "Batman vs Superman",
                  image:
                    "https://elcomercio.pe/resizer/LobdjKJ3Ks8QE0_30tVu5iSNrm8=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/54VKEH4LGRDYZE67ZQPJNQ6N7U.jpg",
                },
                {
                  titulo: "Gran Torino",
                  image: "https://assets.puzzlefactory.pl/puzzle/265/858/original.jpg",
                },
                {
                  titulo: "Looper",
                  image: "https://i.ebayimg.com/images/g/UqgAAOSwFFZexuA1/s-l300.jpg",
                },
              ],
              nombre: "Jaume Ventura",
              favorita:  {}
        });
    }
componentDidMount(){}
// Este método solo se ejecutará si queremos desmontar el método
componentWillUnmount(){}
  render() {
      var pStyle = {
        background: 'green', 
        color: 'white',
        padding: '10px'
      };
      var pStyle2 = {
        background: 'blue', 
        color: 'white',
        padding: '10px'
      };

    //   Posibilidad de hacer condicionales con if
      var favorita;
      if(this.state.favorita.titulo){
          favorita = (
            <p className = "favorita" style ={pStyle}>
            <strong>La película favorita es : </strong>
            <span>{this.state.favorita.titulo }</span>
            </p>
          ) ;
           } else{
              favorita = (
                  <p>No hay película favorita</p>
              )
          }
      
    return (
      <div id="content" className="peliculas">
        <h2 className="subHeader"> PELÍCULAS-2</h2>
        <p>Selección de la películas favoritas de {this.state.nombre}</p>
        <div>
          <button onClick={this.cambiarTitulo}>Cambiar título de Batman</button>
        </div>
        {/* {this.state.favorita.titulo &&
            <p className = "favorita" style ={pStyle}>
            <strong>La película favorita es : </strong>
            <span>{this.state.favorita.titulo }</span>
            </p>
        } */}
        {/* {this.state.favorita.titulo ? (
            <p className = "favorita" style ={pStyle}>
            <strong>La película favorita es : </strong>
            <span>{this.state.favorita.titulo }</span>
            </p>
        ): (
            <p className = "favorita" style ={pStyle2}>
            <strong>La película favorita es : </strong>
            <span>{this.state.favorita.titulo }</span>
            </p>
        )
        } */}
        {favorita}
        <div id="articles" className="peliculas" />
        {this.state.peliculas.map((pelicula, i) => {
          return <Pelicula 
            key={i} 
            pelicula={pelicula}
            indice = {i}
            marcarFavorita = {this.favorita}
             />;
          
        })}
      </div>
    );
  }
}
export default Peliculas2;
