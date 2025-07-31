"use client"

import {useMemo, useCallback} from 'react'
import {useTodos} from '@/context/todoContext'
import TodoItem from '@/components/todoComponents/todoItem'

export default function TodoList() {
	const {state, dispatch} = useTodos()

	// const doneCount = state.todos.filter(todo => todo.done).length
	const doneCount = useMemo(() => {
		return state.todos.filter(todo => todo.done).length;
	}, [state.todos])

	const handleDone = useCallback((id) => {
		dispatch ({type: "TOGGLE_DONE", payload: id})
	}, [dispatch])

	const handleDelete = useCallback((id) => {
 		dispatch ({type: "DELETE_TODO", payload: id})
	}, [dispatch])

	const hasTodos = state.todos.length > 0
  	const isLanguageIndonesian = false

	if (state.loading) {
		return <p className='text-center text-blue-500 font-medium'>Loading... Sedang mengambil data.</p>
	}
	
	if (!hasTodos) {
		return <p className="text-center text-gray-500">Task kosong, silahkan buat Task baru.</p>
	}

	return (
		<ul className='space-y-2'>
			<p>{doneCount} task completed</p>
			{state.todos.map((todo, index) => (
				<TodoItem key={todo.id} todo={todo} index={index+1} onDone={handleDone} onDelete={handleDelete}/>
			))}
		</ul>
	)
}