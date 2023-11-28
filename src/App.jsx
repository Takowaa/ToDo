import { useState } from 'react'
import {nanoid} from "nanoid";
function App() {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])

  const createItem =() =>{
    const newTodo = {
      title: value,
      id: nanoid()
    }
    setTodos([...todos, newTodo])
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]))
    setValue('')
  }
  const deleteItem = (id) => {
    const filteredLIst = todos.filter((el) => el.id !== id)
    localStorage.setItem('todos', JSON.stringify(filteredLIst))
    setTodos(filteredLIst)
  }
  const handleChange = (e) =>{
    setValue(e.target.value)
  }
  return (
    <>
        <h1 className='text-center mt-5 fw-bold'>ToDo</h1>
      <div className="row mt-5">
       <div className="col-4 offset-4">
        <div className="d-flex">
          <input className="form-control" type="text" value={value} onChange={handleChange}/>
          <button className='btn btn-success flex-shrink-0 ms-4' onClick={createItem}>Create</button>
        </div>
       <ul className="list-group mt-3">
         {
           todos.map((todo)=>(
             <li className="list-group-item d-flex justify-content-between" key={todo.id}>{todo.title}
              <button className="btn btn-danger btn-sm" onClick={()=> deleteItem(todo.id)}> Delete</button>
             </li>
           ))
         }
       </ul>
       </div>
      </div>
    </>
  )
}

export default App
