"use client"

import {useTodos} from '@/context/todoContext'

export default function TodoInput() {
  const {state, dispatch} = useTodos()

  const handleChange = (e) => {
    console.log('Change', e.target.value)
    dispatch({type: "SET_INPUT", payload: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Input is submitted")
    dispatch({type: "ADD_TODO"})
  }
  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={state.input}
        onChange={handleChange}
        placeholder="Masukkan Task Baru"
        className="flex-grow px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button 
      // onClick={addTodo} 
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Add Task
        </button>
    </form>
  )
}