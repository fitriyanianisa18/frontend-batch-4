export default function TodoItem({ todo, toggleDone }) {
  return (
    <li
      onClick={() => toggleDone(todo.id)}
      className={`px-4 py-2 rounded cursor-pointer ${
        todo.done
          ? 'bg-green-400 text-gray-500 line-through'
          : 'bg-white border border-gray-300 hover:bg-gray-50'
      }`}
    >
      {todo.text}
    </li>
  )
}