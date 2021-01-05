import React from'react';  // cargo el objeto React del modulo de node que se llama react

// creo una clase, un componente y un metodo para mostrar en pantalla los js y html que debe llevar siempre un return. Component es una clase dentro de React.
class MiComponente extends React.Component{
        render(){

                let receta  = {

                    nombre: 'Pizza',
                    ingredientes: ['Tomate', 'Queso', 'Jamon Cocido'],
                    calorias: 400
                };


            return (

                <div id = "content">
                <React.Fragment>
                    
                   <h1>{'receta: ' +  receta.nombre}</h1>
                   <h5>{'calorias ' + receta.calorias} </h5>
                   <ol>
                            {
                                receta.ingredientes.map((ingredientes, i) => {
                                    console.log(ingredientes);
                                    return (
                                        <li key = {i}>
                                            {ingredientes}
                                        </li>
                                    )
                                }
                                )
                            }
                   </ol>
                   
                   {this.props.saludo  &&
                <React.Fragment>
                <h1>DESDE UNA PROP:</h1>
                <h3>{this.props.saludo}</h3>
                
                </React.Fragment>
               
       }
                 
                 </React.Fragment>
                 </div>
            );
            
        }
    }
        export default MiComponente ;
        // podemos importarlo de la App.js principal