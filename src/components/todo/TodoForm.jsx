import { useState } from 'react'
import TodoList from './TodoList'

// Главный компонент формы добавления задач и списка задач
// компонент TodoList принимает массив. Поэтому стейт надо скорректировать для работы с массивом.
const TodoForm = () => {
  // Для управления состоянием компонента
  const [task, setTask] = useState('')
  // Локальное состояние для списка задач
  const [todos, setTodos] = useState([])

  // Обработчик изменения значения в инпуте
  const handleChange = (event) => {
    // Обновляем состояние task с текущим значением инпута
    setTask(event.target.value)
  }

  // Обработчик отправки формы
  const handleSubmit = (event) => {
    // Предотвращаем перезагрузку страницы при отправке формы
    event.preventDefault()

    if (task.trim()) {
      // Добавляем новую задачу в массив todos
      setTodos([...todos, { id: crypto.randomUUID(), name: task }])
      // Очищаем инпут после добавления задачи
      setTask('')
    }
  }

  // Функция для редактирования задачи
  const editTodo = (id, newTask) => {
    // Обновляем массив задач, заменяя задачу с указанным id на новую
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, name: newTask } : todo))
    )
  }

  // Функция для удаления задачи
  const deleteTodo = (id) => {
    // Обновляем массив задач, исключая задачу с указанным id
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="w-full max-w-xs">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="taskName"
          >
            Task name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="taskName"
            type="text"
            placeholder="Your task"
            value={task}
            onChange={handleChange}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add task
        </button>
      </form>

      {<TodoList todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} />}
    </div>
  )
}

export default TodoForm
