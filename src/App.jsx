import { useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList" 
import "./styles.css"

export default function App() {

  const [todos, setTodo] = useState([])

 

  function addTodo (title){

    setTodo(currentTodos => {
      return [
        ...currentTodos, 
        {id: crypto.randomUUID(), title, completed: false},
      ]

    })
  }
  function toggleTodo(id, completed){

    setTodo( currentTodos => {
      return currentTodos.map(todo =>{
        if (todo.id === id){
          return {...todo, completed}
        }
        return todo
      })   
    })

  }

  function deleteTodo(id){

    setTodo(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
      })
    }
  

    return <> <NewTodoForm addTodo = {addTodo} />
    <h2> Todo List</h2>
 <TodoList todos = {todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
  </>
  
}
