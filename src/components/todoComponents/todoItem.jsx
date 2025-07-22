"use client"

import {useTodos} from '@/context/todoContext'

export default function TodoItem({ todo, index}) {
  const {toggleDone, deleteTodo} = useTodos()

  return (
    <div className="flex items-center justify-between bg-white rounded p-3 shadow-sm">
      <span onClick={() => toggleDone(todo.id)} className={`px-4 py-2 rounded cursor-pointer ${
        todo.done
          ? 'bg-green-400 text-gray-500 line-through'
          : 'bg-white hover:bg-gray-50'
      }`}>
       {`${index}. ${todo.text}`}
      </span>
      <button onClick={() => deleteTodo(todo.id)} className="ml-3 text-red-400 hover: text-red-700 font-bold">
        &times;
      </button>
    </div>

    // <li
    //   onClick={() => toggleDone(todo.id)}
      // className={`px-4 py-2 rounded cursor-pointer ${
      //   todo.done
      //     ? 'bg-green-400 text-gray-500 line-through'
      //     : 'bg-white border border-gray-300 hover:bg-gray-50'
      // }`}
    // >
    //   {todo.text}
    // </li>
  )
}