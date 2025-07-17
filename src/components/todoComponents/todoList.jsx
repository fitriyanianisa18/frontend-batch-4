import TodoItem from '@/components/todoComponents/todoItem'

export default function TodoList({ todos, toggleDone, deleteTodo}) {
	return (
		<ul className='space-y-2'>
			{todos.map((todo, index) => (
				<TodoItem key={todo.id} todo={todo} toggleDone={toggleDone} deleteTodo={deleteTodo} index={index+1}/>
			))}
		</ul>
	)
}
