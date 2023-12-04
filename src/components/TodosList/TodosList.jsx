

const TodosList = ({todos,editableItem,handleChangeEdit,handleUpdateTodo,editCancallation,editItem,deleteItem}) => {
  return (
    <div>
      <ul className="list-group mt-3">
        {
          todos.map((todo)=>(
            <li className="list-group-item d-flex justify-content-between" key={todo.id} >
              {
                editableItem?.id === todo.id ?
                  <input defaultValue={todo.title} className="form-control-sm" type="text" onChange={handleChangeEdit}/>
                  : todo.title
              }
              {
                editableItem?.id === todo.id ?
                  <div>
                    <button className="btn btn-warning btn-sm" onClick={handleUpdateTodo}> Save</button>
                    <button className="btn btn-danger btn-sm ms-2" onClick={editCancallation}> Cancel</button>
                  </div>
                  :
                  <div>
                    <button className="btn btn-warning btn-sm" onClick={()=> editItem(todo)}> Edit</button>
                    <button className="btn btn-danger btn-sm ms-2" onClick={()=> deleteItem(todo.id)}> Delete</button>
                  </div>
              }
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default TodosList;