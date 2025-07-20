import TodoItem from "./todoComponents/todoItem"

export default function TodoList({todos}) {
    // const hasil = JSON.stringify(todos)
    return (
        <ul className="space-y-2">
            {todos.map((isiTodo) => (
                // <div key={isiTodo.id}>{isiTodo.text}</div>
                <TodoItem key={isiTodo.id} todo={isiTodo} />
            ))}
        </ul>
    )
}