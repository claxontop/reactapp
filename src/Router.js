import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SeccionPruebas from "./components/SeccionPruebas";
import MiComponente from "./components/MiComponente";
import Peliculas2 from "./components/Peliculas2";
import Error from "./components/Error";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";


class  Router extends  Component{

    render(){
        var buttonString = "ir al Blog";
        return(
            
             <BrowserRouter>
                
                    <Header />
                    
                    <Slider
                    title="Bienvenidos al Curso de React con Víctor Robles de victorroblesweb.es"
                    btn={buttonString}
                    />
                    <div className="center">

                   

              {/* CONFIGURAR RUTAS Y PÁGINAS */}
                    <Switch>
                    <Route exact path = "/" component = {Peliculas2} />
                            <Route exact path = "/ruta-prueba" component = {SeccionPruebas} />

                            <Route exact path = "/segunda-ruta" component = {MiComponente} />
                            
                        {/* <Route exact path = "/pruebas/:id" render = { (props) => {
                                        var id = props.match.params.id;
                                         return (
                                            <div id = "content">
                                            < h1>Página de pruebas1</h1>
                                            <h2>{id}</h2>
                                            </div>
                                         );
                        }} />   */}

                        {/* <Route exact path = "/pruebas/:nombre/:apellidos?" render = { (props) => {
                                        var nombre = props.match.params.nombre;
                                        var apellidos = props.match.params.apellidos;
                                         return (
                                            <div id = "content">
                                            < h1>Página de pruebas2</h1>
                                            <h2>{nombre + "  " + apellidos}</h2>
                                            </div>
                                         );
                        }} />    */}

                        <Route exact path = "/pruebas/:nombre/:apellidos?" render = { (props) => {
                                        var nombre = props.match.params.nombre;
                                        var apellidos = props.match.params.apellidos;
                                         return (
                                            <div id = "content">
                                            < h1>Página de pruebas3</h1>
                                            <h2>
                                                {nombre  && ! apellidos &&
                                                <React.Fragment>
                                                         {nombre}
                                                </React.Fragment>
                                                 }
                                                 {nombre && apellidos &&
                                                        <React.Fragment>
                                                        {nombre} {apellidos}
                                                        </React.Fragment>
                                                 }      
                                                </h2>
                                            </div>
                                         );
                        }} />


                            
                            <Route exact path = "/pagina-1" render = {( )=> (
                                        <React.Fragment>
                                        <h1>Hola Mundo desde mi casa</h1>
                                        <div id = "content">
                                        <MiComponente saludo = "Hola Amigo"/>
                                        
                                        </div>
                                        
                                        </React.Fragment>
                    )} />

                    <Route component = {Error} />
                    </Switch>
                    <Sidebar />
                    <div className="clearfix"></div>
                    </div>
     

                    <Footer />
        </BrowserRouter>
        );
    }
}

export default Router;