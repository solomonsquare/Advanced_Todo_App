import { useState } from "react"
// import "./styles.css"
import PropTypes from 'prop-types'


export function NewTodoForm({addTodo}){
    
    const [newItem, setNewItem] = useState("")
    //const [todos, setTodo] = useState([])

    function handleSubmit(e){
    e.preventDefault()
    if (newItem === "") return

    addTodo(newItem)

    setNewItem("")
  }

    return <form onSubmit={handleSubmit} className='new-item-form'>
    <div className='form-row'>
      <label htmlFor='item'>New Item</label>
      <input value={newItem} onChange={e => setNewItem(e.target.value) } type='text' id='item' />
    </div>
    <button className='btn'>Add</button> 
  </form>
}

NewTodoForm.propTypes = {

  addTodo: PropTypes.func.isRequired,

}

