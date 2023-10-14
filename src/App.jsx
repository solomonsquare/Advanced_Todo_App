import { useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
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
  {/*Remember you can only return on return one element in a component, thus to return more you can wrap in a fragment - "<> </>" or a div */}
  <h2> Todo List</h2>
  <ul className="list">
    {todos.length === 0 && "No todos"}
    {todos.map(todo => {
        return <li key={todo.id}>
        <label>
          <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)} />
            {todo.title}
        </label>
        <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
      </li>
    })}
    
  </ul>
  </>
  
}
