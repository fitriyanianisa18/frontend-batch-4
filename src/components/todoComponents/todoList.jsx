import TodoItem from '@/components/todoComponents/todoItem'

export default function TodoList({ todos, toggleDone, deleteTodo, startEdit, saveEdit, editId, editText, setEditText }) {
	return (
		<ul className='space-y-2'>
			{todos.map((todo) => (
				<TodoItem 
					key={todo.id} 
					todo={todo} 
					toggleDone={toggleDone} 
					deleteTodo={deleteTodo}
					startEdit={startEdit}
					saveEdit={saveEdit}
					isEditing={editId === todo.id}
					editText={editText}
					setEditText={setEditText}
				/>
			))}
		</ul>
	)
}