"use client"

import {useEffect, useState}  from 'react' // state = informasi yg disimpan u/ nanti ditampilkan
// import TodoInput from '@/components/todoComponents/todoInput'
import TodoInput from '../components/todoComponents/todoInput'
import TodoList from '../components/todoList'

export default function Todo_Page() {
    // deklarasi state
    const [input, setInput] = useState("")
    const [todos, setTodos] = useState([])

    //saat mounting
    useEffect(() => {
        console.log("Komponen pertama kali ditempel")
        const saved = localStorage.getItem("todos")
        if (saved) setTodos(JSON.parse(saved))
    }, [])

    // saat update
    useEffect(() => {
        console.log("Komponen diupdate")
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const addTodo = () => {
        if (!input.trim()) {
            console.log("Input kosong, tidak ada yang ditambahkan")
            alert("Input kosong, tidak ada yang ditambahkan")
        return 
        }

        const dataBaru = {
            id: Date.now(),
            text: input,
            done: false
        }

        setTodos([...todos, dataBaru]) 
        setInput("") 
    }

    return (
    <main className ="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-200"> 
    {/* // main = isi konten dari sebuah halaman, ada dalam body */}
        <div className="w-full max-w-md space-y-4">
            <h1 className="text-center font-bold text-2xl">My Todo List</h1>

            {/* props/parameter = u/ menerima data fungsi butuh parameter */}
            {/* TodoInput mengirim props/argumen, diawali huruf besar berarti component */}
            <TodoInput input={input} setInput={setInput} addTodo={addTodo}/>

            {/* TodoList mengirim props todos berupa variable todos */}
            <TodoList todos={todos}/>
        </div>
    </main>
    )
}