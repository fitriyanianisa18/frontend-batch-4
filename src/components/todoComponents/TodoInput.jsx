export default function TodoInput({ input, setInput, addTodo }) {
  const handleChange = (e) => {
    console.log('Change', e.target.value)
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Input is submitted")
    // addTodo()
  }
  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={input}
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