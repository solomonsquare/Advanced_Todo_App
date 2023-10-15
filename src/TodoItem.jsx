import PropTypes from 'prop-types'

export function TodoItem ({id, title, completed, toggleTodo, deleteTodo} ){

   return  <li>
        <label>
            <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)} 
            />
            {title}
        </label>
         <button onClick={() => deleteTodo(id)} 
        className="btn btn-danger">Delete</button> 
        </li>

}

TodoItem.propTypes = {
    id: PropTypes.array.isRequired,
    title: PropTypes.func.isRequired,
    completed: PropTypes.func.isRequired,
  };