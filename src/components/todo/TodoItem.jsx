/**
 * Компонент строка для задач.
 * @param {Object} props - Свойства компонента.
 * @param {Object} props.todo - Объект задачи с полями id и name.
 * @param {function} props.editTodo - Обработчик клика для редактирования задачи.
 * @param {function} props.deleteTodo - Обработчик клика для удаления задачи.
 */
const TodoItem = ({ todo, editTodo, deleteTodo }) => {
  // Обработчик редактирования задачи
  const handleEdit = () => {
    // Показываем пользователю prompt для ввода нового названия задачи
    let newTask = prompt('Изменить задачу:', todo.name)
    // Вызываем функцию редактирования задачи
    if (newTask !== null) editTodo(todo.id, newTask)
  }

  return (
    <li>
      <span>{todo.name}</span>
      <button
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-normal py-2 px-4 rounded"
        onClick={handleEdit}
      >
        Edit
      </button>
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-gray-400 rounded shadow"
        onClick={() => deleteTodo(todo?.id)}
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem
