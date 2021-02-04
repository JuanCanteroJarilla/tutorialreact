import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { todo } from './todos.json';

class App extends Component{

  constructor(){
    super();
    this.state = { //Se configura el estado, que en este caso recogerá los valores del todos.json simulando una BBDD
      todo
    }
  }

  render(){
    const todos = this.state.todo.map((todo, i) => { //Se recorren todos los elementos con un for, y se guarda dentro de una constante "todos"
      return(
        //Para cada uno de los elementos se creará un div que contendrá el atributo titulo de ese objeto
         <div className="col-md-4">
           <div className="card mt-4"> 
          <div className="card-header">
            <h3>{ todo.title }</h3>
            <span className="badge rounded-pill bg-danger ms-2">
              { todo.priority }
            </span>
          </div>
          <div className="card-body">
            <p>{ todo.description }</p>
            <mark>{ todo.responsible }</mark>
          </div>
        </div>
         </div>
         
      )
    })

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
                <a href="" className="text-white">
                    Tasks
                    <span className="badge rounded-pill bg-light text-dark ms-3">
                      { this.state.todo.length }
                    </span>
                </a>
        </nav>
        <div className="container">
          <div className="row mt-4">
          { todos }
          </div>
        </div>
         

        <img src={logo} className="App-logo" alt="logo" /> 
      </div>
    );
  }
}


export default App;
