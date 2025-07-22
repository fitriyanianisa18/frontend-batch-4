"use client"

import {useState} from 'react'

export default function TodoInput({todos, setTodos}) { //TodoInput menerima props/parameter
    const [input, setInput] = useState("")

        const addTodo = () => {
    if (!input.trim()) {
      console.log("Input kosong, tidak ada yang ditambahkan")
      alert("Input kosong, tidak ada yang ditambahkan")
      return;
    }

    const dataBaru = {
      id: Date.now(),
      text: input,
      done: false,
    }

    setTodos([...todos, dataBaru])
    setInput("")
  }
            
    return (
        <div className="flex gap-2"> 
            <input 
            type="text" value={input} onChange={(e) => setInput(e.target.value)} className="flex-grow px-4 py-2 border-gray-300 border rounded bg-amber-200" placeholder="Silahkan Tambah Task"/>

            <button onClick={addTodo} className="px-4
            py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Add</button>
        </div>
    )
}