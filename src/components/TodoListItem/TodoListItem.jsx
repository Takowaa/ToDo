import { useState } from 'react';

const TodoListItem = ({
  todo,
  editableItem,
  handleChangeEdit,
  handleUpdateTodo,
  editCancallation,
  deleteItem,
  editItem,
}) => {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  const handleChangeStatus = e => {
    setIsCompleted(e.target.checked);
    handleUpdateTodo({ ...todo, isCompleted: e.target.checked });
  };

  return (
    <div>
      <li
        className="list-group-item d-flex justify-content-between"
        key={todo.id}
      >
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleChangeStatus}
        />
        {editableItem?.id === todo.id ? (
          <input
            defaultValue={todo.title}
            className="form-control-sm"
            type="text"
            onChange={handleChangeEdit}
          />
        ) : (
          todo.title
        )}
        {!isCompleted && (
          <>
            {editableItem?.id === todo.id ? (
              <div>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => handleUpdateTodo(editableItem)}
                >
                  {' '}
                  Save
                </button>
                <button
                  className="btn btn-danger btn-sm ms-2"
                  onClick={editCancallation}
                >
                  {' '}
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => editItem(todo)}
                >
                  {' '}
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm ms-2"
                  onClick={() => deleteItem(todo.id)}
                >
                  {' '}
                  Delete
                </button>
              </div>
            )}
          </>
        )}
      </li>
    </div>
  );
};

export default TodoListItem;
