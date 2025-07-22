'use client'

import {TodoProvider} from '@/context/todoContext'
import TodoInput from '@/components/todoComponents/TodoInput'
import TodoList from '@/components/todoComponents/todoList'

export default function Home() {
  // const hasTodos = todos.length > 0
  // const isLanguageIndonesian = false

  // let list 
  //   if (!hasTodos) {
  //   list = <p className='text-center text-gray-500'>Task is empty. Please create a task.</p>;
  //   } else {
  //   list = <TodoList todos={todos} toggleDone={toggleDone} deleteTodo={deleteTodo}/>;
  //   }

  return (
    <TodoProvider>
            <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center">My Todo List</h1>
        <TodoInput/>
        <TodoList/>

        {/* 1. if-else */}
          {/* {(() => {
            if (!hasTodos) {
              return <p className='text-center text-gray-500'>Task is empty. Please create a task.</p>
            } else {
              return <TodoList todos={todos} toggleDone={toggleDone} deleteTodo={deleteTodo}/>;
            }
          })()} */}
          
          {/* 2. Ternary Operator */}
          {/* 2 kondisi */}
          {/* {hasTodos ? <TodoList todos={todos} toggleDone={toggleDone} deleteTodo={deleteTodo}/> : <p className='text-center text-gray-500'>Task is empty. Please create a task.</p>}       */}
          {/* 3 kondisi */}
          {/* {hasTodos ? (
          <TodoList/>
            ) : isLanguageIndonesian ? (
          <p className="text-center text-gray-500">Task kosong, silahkan buat Task baru.</p>
            ) : (
          <p className="text-center text-gray-500">Task is empty. Please create a task</p>
          )} */}

          {/* 3. Logical AND (&&) */}
          {/* {hasTodos && <TodoList todos={todos} toggleDone={toggleDone} deleteTodo={deleteTodo}/>}
          {!hasTodos && <p className='text-center text-gray-500'>Task is empty. Please create a task.</p>} */}

          {/* {list} */}
      </div>
    </main>
    </TodoProvider>
  )
}