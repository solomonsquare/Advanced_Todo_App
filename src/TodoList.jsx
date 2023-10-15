// import { useState } from "react"
import { TodoItem } from "./TodoItem"
import PropTypes from 'prop-types'




export function TodoList({ todos, toggleTodo, deleteTodo }){
return  (

    
    <ul className="list">
    {todos.length === 0 && "No todos"}
    {todos.map(todo => {
        return <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    })}
    
    </ul>

)
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  }
