import TodoListItem from '../TodoListItem/TodoListItem.jsx';

const TodosList = ({
  todos,
  editableItem,
  handleChangeEdit,
  handleUpdateTodo,
  editCancallation,
  editItem,
  deleteItem,
  title,
}) => {
  return (
    <div>
      <ul className="list-group mt-3">
        {todos.map(todo => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            editableItem={editableItem}
            handleChangeEdit={handleChangeEdit}
            title={title}
            handleUpdateTodo={handleUpdateTodo}
            editCancallation={editCancallation}
            editItem={editItem}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
