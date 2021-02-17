import React, { Component } from 'react'
import Todos from "./component/Todos"
import AddTodo from "./component/AddTodo"



class App extends Component {

  state = {
    todos:[
            {id: 1, content:"Go to Gym"},
            {id: 2, content:"Do some laundry"},
            {id: 3, content:"Feed the cat"}
    ]
  }

  addTodo = (todo) =>{
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }

  deleteTodo = (id) => {
   const todos = this.state.todos.filter( todo => {
     return todo.id !== id
   });
   this.setState({
      todos
    })}

  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text"> Todo's</h1>
       <Todos todos={ this.state.todos } deleteTodo={this.deleteTodo}/>
       <AddTodo addTodo={this.addTodo} />
        
      </div>
    )

  }
 
}

export default App;
