'use client'

import { useState, useEffect } from 'react' //useEffect: salah satu metode untuk melihat perubahan" yang terjadi di okmponen kita
import TodoInput from '@/components/todoComponents/TodoInput'
import TodoList from '@/components/todoComponents/todoList'

export default function Home() {
  // const todos = [
  // 	{id: 1, text: "memasak", done: false},
  // 	{id: 2, text: "memasak", done: false},
  // 	{id: 3, text: "memasak", done: false},
  // 	{id: 4, text: "memasak", done: false}
  // ]
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  //sama seperti componentDidMount
  useEffect(() => {
    console.log("Component is mounted")
    const savedData = localStorage.getItem("todos")
    if (savedData) setTodos (JSON.parse(savedData))
  }, [])

  //sama seperti componentDidUpdate
  useEffect (() => {
    console.log("Todos is updated")
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addTodo = () => {
    if (!input.trim()) return
    setTodos([...todos, { id: Date.now(), text: input, done: false }])
    setInput("")
  }

  const toggleDone = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ))
  }

  const hasTodos = todos.length > 0

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center">My Todo List</h1>
        <TodoInput input={input} setInput={setInput} addTodo={addTodo} />

        {/* 1. if-else */}
          {/* {(() => {
            if (!hasTodos) {
              return <p className='text-center text-gray-500'>Task is empty. Please create a task.</p>
            } else {
              return <TodoList todos={todos} toggleDone={toggleDone} deleteTodo={deleteTodo}/>;
            }
          })()} */}
          
          {/* 2. Ternary Operator */}
          {/* {hasTodos ? <TodoList todos={todos} toggleDone={toggleDone} deleteTodo={deleteTodo}/> : <p className='text-center text-gray-500'>Task is empty. Please create a task.</p>} */}

          {/* 3. Logical AND (&&) */}
          {hasTodos && <TodoList todos={todos} toggleDone={toggleDone} deleteTodo={deleteTodo}/>}
          {!hasTodos && <p className='text-center text-gray-500'>Task is empty. Please create a task.</p>}
      </div>
    </main>
  )
}