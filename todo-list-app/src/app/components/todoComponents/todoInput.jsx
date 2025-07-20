"use client"



export default function TodoInput({input, setInput, addTodo}) { //TodoInput menerima props/parameter
    return (
        <div className="flex gap-2"> 
            <input 
            type="text" value={input} onChange={(e) => setInput(e.target.value)} className="flex-grow px-4 py-2 border-gray-300 border rounded bg-amber-200" placeholder="Silahkan Tambah Task"/>

            <button onClick={addTodo} className="px-4
            py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Add</button>
        </div>
    )
}