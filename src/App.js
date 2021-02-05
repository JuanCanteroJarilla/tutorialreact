import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { todo } from './todos.json';
import TodoForm from './components/TodoForm';

class App extends Component{

  constructor(){
    super();
    this.state = { //Se configura el estado, que en este caso recogerá los valores del todos.json simulando una BBDD
      todo
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo){
    this.setState({
      todo: [...this.state.todo, todo] //Le concatenamos los nuevos datos que se vayan a añadir
    })
  }

  render(){
    const todos = this.state.todo.map((todo, i) => { //Se recorren todos los elementos con un for, y se guarda dentro de una constante "todos"
      return(
        //Para cada uno de los elementos se creará un div que contendrá el atributo titulo de ese objeto
         <div className="col-md-4">
            <div className="card mt-4"> 
              <div className="card-header">
                <h3>{ todo.title }</h3>
                <h6>
                  <span className="badge rounded-pill bg-danger">
                    { todo.priority }
                  </span>  
                </h6>
              </div>
              
              <div className="card-body">
                <p>{ todo.description }</p>
                <mark>{ todo.responsible }</mark>
              </div>
            </div>
         </div>
         
      )
    });

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
                <a href="/" className="text-white">
                    Tasks
                    <span className="badge rounded-pill bg-light text-dark ms-3">
                      { this.state.todo.length }
                    </span>
                </a>
        </nav>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3">
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>
            <div className="col-md-8">
              <div className="row">
                { todos }
              </div>
            </div>                         
          </div>
        </div>
        
      </div>
    );
  }
}


export default App;
