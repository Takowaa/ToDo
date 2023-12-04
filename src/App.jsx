import {useEffect, useState} from 'react'
import axios from "axios";
import TodosList from "./components/TodosList/index.js";
import FormList from "./components/FormList/index.js";

function App() {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState( [])
  const [editableItem, setEditableItem] = useState(null)

  const handleChange = (e) =>{
    setValue(e.target.value)

  }
  const createItem =() =>{
    axios.post(`https://656d7f61bcc5618d3c23460f.mockapi.io/api/todos`, {title: value})
      .then(({data}) => setTodos([...todos, data]))
    setValue('')
  }

  const deleteItem = (id) => {
    axios.delete(`https://656d7f61bcc5618d3c23460f.mockapi.io/api/todos/${id}`)
      .then(() => {
        const filteredLIst = todos.filter((el) => el.id !== id)
        setTodos(filteredLIst)
      })
      .catch(() => alert("Failed"))

  }
  const editItem = (todo) =>{
    setEditableItem(todo)
  }
  const editCancallation = () =>{
    setEditableItem(null)
  }
  const handleChangeEdit = (e) =>{
    setEditableItem({...editableItem, title: e.target.value})

  }
  const  handleUpdateTodo = () =>{
    axios.put(`https://656d7f61bcc5618d3c23460f.mockapi.io/api/todos/${editableItem.id}`,editableItem)
      .then(({data}) => {
        const updateList = todos.map(elem => elem.id === data.id ? data : elem)
        setTodos(updateList)
        setEditableItem(null)
      })
  }
const handleKeyUp = (e) =>{
   if ( e.key === "Enter" ){
     createItem()
   }

}

  useEffect(() => {
        axios("https://656d7f61bcc5618d3c23460f.mockapi.io/api/todos")
          .then(({data}) => setTodos(data) )
  }, []);
  return (
    <>
        <h1 className='text-center mt-5 fw-bold'>ToDo</h1>
      <div className="row mt-5">
       <div className="col-4 offset-4">
       <FormList
         handleKeyUp={handleKeyUp}
         handleChange={handleChange}
         createItem={createItem}
         value={value}
       />
          <TodosList
            todos={todos}
            editableItem={editableItem}
            handleChangeEdit={handleChangeEdit}
            handleUpdateTodo={handleUpdateTodo}
            editCancallation={editCancallation}
            editItem={editItem}
            deleteItem={deleteItem}
          />
       </div>
      </div>
    </>
  )
}

export default App
