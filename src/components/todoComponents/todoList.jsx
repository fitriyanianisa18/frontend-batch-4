"use client"

import {useTodos} from '@/context/todoContext'
import TodoItem from '@/components/todoComponents/todoItem'

export default function TodoList() {
	const {todos} = useTodos()

	const hasTodos = todos.length > 0
  	const isLanguageIndonesian = false
	
	if (!hasTodos) {
		return <p className="text-center text-gray-500">Task kosong, silahkan buat Task baru.</p>
	}

	return (
		<ul className='space-y-2'>
			{todos.map((todo, index) => (
				<TodoItem key={todo.id} todo={todo} index={index+1}/>
			))}
		</ul>
	)
}
